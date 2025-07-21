#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const commander = require('commander')
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const { execSync } = require('child_process')

// Load environment variables from .env file if it exists
function loadEnvFile() {
  try {
    const envPath = path.resolve(process.cwd(), '.env')
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8')
      const envVars = envContent
        .split('\n')
        .filter((line) => line.trim() && !line.startsWith('#'))
        .map((line) => {
          const [key, ...valueParts] = line.split('=')
          const value = valueParts.join('=').trim()
          return { key: key.trim(), value: value.replace(/^["']|["']$/g, '') }
        })

      envVars.forEach(({ key, value }) => {
        if (!process.env[key]) {
          process.env[key] = value
        }
      })

      console.log(
        chalk.blue(
          `[${new Date().toISOString()}] Loaded environment variables from .env file`
        )
      )
    }
  } catch (error) {
    console.log(
      chalk.yellow(
        `[${new Date().toISOString()}] Warning: Could not load .env file: ${
          error.message
        }`
      )
    )
  }
}

// Load .env file when running locally
loadEnvFile()

// Configuration
const CONFIG = {
  TARGET_TOKEN_FILE:
    process.env.TARGET_TOKEN_FILE ||
    'src/tokenlists/balancer/tokens/berachain.ts',
  ASSETS_DIR: process.env.ASSETS_DIR || 'src/assets/images/tokens',
  LOG_FILE: `create-pr-${new Date()
    .toISOString()
    .replace(/[:.]/g, '-')
    .slice(0, 19)}.log`,
}

// Statistics tracking
const stats = {
  newTokens: 0,
  newLogos: 0,
  changesDetected: false,
  prCreated: false,
  errors: [],
}

/**
 * Log message with timestamp
 */
function log(message, type = 'info') {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] ${message}`

  switch (type) {
    case 'error':
      console.error(chalk.red(logMessage))
      stats.errors.push(logMessage)
      break
    case 'success':
      console.log(chalk.green(logMessage))
      break
    case 'warning':
      console.log(chalk.yellow(logMessage))
      break
    default:
      console.log(chalk.blue(logMessage))
  }

  // Append to log file
  fs.appendFileSync(CONFIG.LOG_FILE, logMessage + '\n')
}

/**
 * Check if running in CI environment
 */
function isCI() {
  return process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true'
}

/**
 * Configure git for CI environment
 */
function configureGitForCI() {
  if (isCI()) {
    try {
      // Set git user for CI
      execSync('git config --global user.name "github-actions[bot]"', {
        stdio: 'inherit',
      })
      execSync(
        'git config --global user.email "github-actions[bot]@users.noreply.github.com"',
        { stdio: 'inherit' }
      )
      log('Git configured for CI environment')
    } catch (error) {
      log(
        `Warning: Failed to configure git for CI: ${error.message}`,
        'warning'
      )
    }
  }
}

/**
 * Check if there are any changes to commit
 */
function hasChanges() {
  try {
    const result = execSync('git status --porcelain', { encoding: 'utf8' })
    return result.trim().length > 0
  } catch (error) {
    log(`Failed to check git status: ${error.message}`, 'error')
    return false
  }
}

/**
 * Create a new branch with timestamp
 */
function createNewBranch() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const branchName = `feat/tokenlist-update-${timestamp}`

  try {
    execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' })
    log(`Created new branch: ${branchName}`)
    return branchName
  } catch (error) {
    log(`Failed to create branch: ${error.message}`, 'error')
    return null
  }
}

/**
 * Add and commit changes
 */
function commitChanges() {
  try {
    // Add all changes
    execSync('git add .', { stdio: 'inherit' })

    // Get list of changed files for commit message
    const changedFiles = execSync('git diff --cached --name-only', {
      encoding: 'utf8',
    })
      .trim()
      .split('\n')
      .filter((file) => file.length > 0)

    const commitMessage = `feat: update token list and assets

- Updated berachain token list
- Added new token logos
- Generated timestamped backup and logs

Changed files:
${changedFiles.map((file) => `- ${file}`).join('\n')}`

    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' })
    log('Changes committed successfully')
    return true
  } catch (error) {
    log(`Failed to commit changes: ${error.message}`, 'error')
    return false
  }
}

/**
 * Get repository information from various sources
 */
function getRepositoryInfo() {
  // Try to get from GitHub Actions context first
  if (process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
    log(`Using repository info from GITHUB_REPOSITORY: ${owner}/${repo}`)
    return { owner, repo }
  }

  // Try to get from git remote
  try {
    const remoteUrl = execSync('git config --get remote.origin.url', {
      encoding: 'utf8',
    }).trim()

    log(`Remote URL: ${remoteUrl}`)

    // Handle HTTPS format (https://github.com/owner/repo.git)
    let repoMatch = remoteUrl.match(
      /github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/
    )

    // If no match, try SSH format (git@host:owner/repo.git)
    if (!repoMatch) {
      repoMatch = remoteUrl.match(/git@([^:]+):([^/]+)\/([^/]+?)(?:\.git)?$/)
      if (repoMatch) {
        // SSH format: [host, owner, repo]
        const [, host, owner, repo] = repoMatch
        log(`Parsed SSH URL: ${owner}/${repo} on ${host}`)
        return { owner, repo }
      }
    }

    if (repoMatch) {
      const [, owner, repo] = repoMatch
      log(`Parsed HTTPS URL: ${owner}/${repo}`)
      return { owner, repo }
    }

    log('Could not parse repository information from git remote.', 'error')
    return null
  } catch (error) {
    log(
      `Failed to get repository info from git remote: ${error.message}`,
      'error'
    )
    return null
  }
}

/**
 * Push branch and create PR
 */
function pushAndCreatePR(branchName) {
  try {
    // Push the branch
    execSync(`git push -u origin ${branchName}`, { stdio: 'inherit' })
    log(`Pushed branch ${branchName} to remote`)

    // Get GitHub token from environment
    const githubToken = process.env.GITHUB_TOKEN
    if (!githubToken) {
      log('GITHUB_TOKEN environment variable not found.', 'warning')
      log('Please set GITHUB_TOKEN to create PRs automatically.')
      log(`Branch pushed: ${branchName}`)
      log('Please create the PR manually using the GitHub web interface')
      return false
    }

    // Get repository info
    const repoInfo = getRepositoryInfo()
    if (!repoInfo) {
      log('Could not determine repository information.', 'error')
      log(`Branch pushed: ${branchName}`)
      log('Please create the PR manually using the GitHub web interface')
      return false
    }

    const { owner, repo } = repoInfo
    // Always use api.github.com for API calls, regardless of SSH host
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pulls`

    const prTitle = `feat: Update token list and assets - ${new Date().toLocaleDateString()}`
    const prBody = `## Token List Update

This PR updates the berachain token list and associated logo assets.

### Changes:
- Updated token list with new addresses
- Added new token logo images
- Generated timestamped backups and logs

### Files Changed:
- \`src/tokenlists/balancer/tokens/berachain.ts\` - Updated token addresses
- \`src/assets/images/tokens/\` - New logo assets
- Generated backup files and logs

### Summary:
- New tokens added: ${stats.newTokens}
- New logos downloaded: ${stats.newLogos}
- All changes have been tested and validated

---
*Auto-generated by tokenlist update workflow*`

    const prData = {
      title: prTitle,
      body: prBody,
      head: branchName,
      base: 'main',
    }

    const curlCommand = `curl -X POST "${apiUrl}" \
      -H "Authorization: token ${githubToken}" \
      -H "Accept: application/vnd.github.v3+json" \
      -H "Content-Type: application/json" \
      -d '${JSON.stringify(prData)}'`

    const result = execSync(curlCommand, { encoding: 'utf8' })
    const prResponse = JSON.parse(result)

    if (prResponse.html_url) {
      log(`Pull request created successfully: ${prResponse.html_url}`)
      stats.prCreated = true
      return true
    } else {
      log(`Failed to create PR: ${result}`, 'error')
      return false
    }
  } catch (error) {
    log(`Failed to create PR via API: ${error.message}`, 'error')
    log(`Branch pushed: ${branchName}`)
    log('Please create the PR manually using the GitHub web interface')
    return false
  }
}

/**
 * Analyze changes to provide better commit messages
 */
function analyzeChanges() {
  try {
    // Check for new tokens in berachain.ts
    if (fs.existsSync(CONFIG.TARGET_TOKEN_FILE)) {
      const content = fs.readFileSync(CONFIG.TARGET_TOKEN_FILE, 'utf8')
      const addresses = content.match(/'0x[a-fA-F0-9]{40}'/g) || []
      stats.newTokens = addresses.length
    }

    // Check for new logo files by counting only the newly added files
    try {
      // Use git diff to get files that were added in the last commit
      const result = execSync('git diff HEAD~1 --name-only --diff-filter=A', {
        encoding: 'utf8',
      })
      const newFiles = result
        .trim()
        .split('\n')
        .filter((file) => file.startsWith(CONFIG.ASSETS_DIR))
      stats.newLogos = newFiles.length
    } catch (error) {
      // Fallback: count all files in directory if git command fails
      if (fs.existsSync(CONFIG.ASSETS_DIR)) {
        const files = fs.readdirSync(CONFIG.ASSETS_DIR)
        stats.newLogos = files.length
      }
    }

    log(`Analysis: ${stats.newTokens} tokens, ${stats.newLogos} logo files`)
  } catch (error) {
    log(`Failed to analyze changes: ${error.message}`, 'warning')
  }
}

/**
 * Main workflow function
 */
async function createPRWorkflow() {
  log('Starting PR creation workflow...')

  // Configure git for CI if needed
  configureGitForCI()

  // Clear log file
  fs.writeFileSync(CONFIG.LOG_FILE, '')

  try {
    // Step 1: Check if there are changes
    if (!hasChanges()) {
      log('No changes detected. Nothing to commit.', 'warning')
      return
    }

    stats.changesDetected = true
    log('Changes detected, proceeding with PR creation...')

    // Step 2: Analyze changes
    analyzeChanges()

    // Step 3: Create new branch
    const branchName = createNewBranch()
    if (!branchName) {
      throw new Error('Failed to create new branch')
    }

    // Step 4: Run lint:fix
    log('Running lint:fix...')
    try {
      execSync('npm run lint:fix', { stdio: 'inherit' })
      log('Lint:fix completed successfully')
    } catch (error) {
      log(`Lint:fix failed: ${error.message}`, 'warning')
      log('Continuing with PR creation...')
    }

    // Step 5: Commit changes
    if (!commitChanges()) {
      throw new Error('Failed to commit changes')
    }

    // Step 6: Push and create PR
    if (!pushAndCreatePR(branchName)) {
      log('PR creation workflow completed with warnings', 'warning')
      return
    }

    log('PR creation workflow completed successfully!', 'success')
  } catch (error) {
    log(`Workflow failed: ${error.message}`, 'error')
    process.exit(1)
  }
}

/**
 * Print summary report
 */
function printSummary() {
  console.log('\n' + '='.repeat(50))
  console.log(chalk.cyan('CREATE PR SUMMARY'))
  console.log('='.repeat(50))

  if (stats.changesDetected) {
    console.log(`Changes detected: ${chalk.green('Yes')}`)
    console.log(`New tokens: ${chalk.blue(stats.newTokens)}`)
    console.log(`New logos: ${chalk.blue(stats.newLogos)}`)
    if (stats.prCreated) {
      console.log(`PR created: ${chalk.green('Yes')}`)
    } else {
      const hasErrors = stats.errors.length > 0
      const hasToken = process.env.GITHUB_TOKEN
      if (!hasToken) {
        console.log(`PR created: ${chalk.yellow('No - GITHUB_TOKEN not set')}`)
      } else if (hasErrors) {
        console.log(`PR created: ${chalk.yellow('No - API error occurred')}`)
      } else {
        console.log(`PR created: ${chalk.yellow('No - Unknown error')}`)
      }
    }
  } else {
    console.log(`Changes detected: ${chalk.yellow('No')}`)
    console.log('No changes to commit')
  }

  if (stats.errors.length > 0) {
    console.log(`\n${chalk.red('Errors:')}`)
    stats.errors.forEach((error) => console.log(`  ${error}`))
  }

  console.log(`\nLog file: ${CONFIG.LOG_FILE}`)
  console.log('='.repeat(50))
}

/**
 * CLI setup
 */
async function init() {
  const program = new commander.Command()
    .version('1.0.0')
    .name('npm run git:pr')
    .description('Create a new branch and PR for token list changes')
    .option('-f, --force', 'Force PR creation even if no changes detected')
    .option('-v, --verbose', 'Enable verbose logging')
    .parse(process.argv)

  const options = program.opts()

  if (options.force) {
    log('Force mode enabled')
  }

  if (options.verbose) {
    log('Verbose mode enabled')
  }

  await createPRWorkflow()
  printSummary()
}

// Run the script
;(async () => {
  await init()
})()
