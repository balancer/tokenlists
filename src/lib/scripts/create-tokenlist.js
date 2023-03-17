#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const commander = require('commander')
const chalk = require('chalk')
const pkgJson = require('../../../package.json')
const path = require('path')
const fs = require('fs-extra')

let tokenlistName

async function init() {
  const program = new commander.Command()
    .version(pkgJson.version)
    .name('npm run tokenlist:create')
    .arguments('<tokenlist-name>')
    .usage(`${chalk.green('<tokenlist-name>')} [options]`)
    .action((name) => {
      tokenlistName = name
    })
    .parse(process.argv)

  if (typeof tokenlistName === 'undefined') {
    console.error('Please specify the tokenlist name:')
    console.log(
      `  ${chalk.cyan(program.name())} ${chalk.green('<tokenlist-name>')}`
    )
    console.log()
    console.log('For example:')
    console.log(
      `  ${chalk.cyan(program.name())} ${chalk.green('my-new-tokenlist')}`
    )
    process.exit(1)
  }

  await createTokenlist(tokenlistName)
}

async function createTokenlist(name) {
  const templateDir = path.resolve(__dirname, '../templates/tokenlist')
  const newAppDir = path.resolve('src/tokenlists/', name)
  const tokenlistName = path.basename(newAppDir)

  fs.ensureDirSync(newAppDir)

  console.log(`Creating a new tokenlist in ${chalk.green(newAppDir)}.`)
  console.log()

  try {
    fs.copySync(templateDir, newAppDir)
    console.log(`✅ New tokenlist '${tokenlistName}' created!`)
  } catch (error) {
    console.error('Failed to create new tokenlist', { cause: error })
  }
}

;(async () => {
  await init()
})()
