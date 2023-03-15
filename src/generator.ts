import 'dotenv/config'
import { tokens } from './tokens'
import { overwrites } from './overwrites'
import existingTokenlist from '../generated/balancer.tokenlist.json'
import { TokenList, TokenInfo } from '@uniswap/token-lists'
import { Network, PartialTokenInfoMap } from './types'
import { fetchOnchainMetadata } from './lib/fetchers/onchain'
import { fetchExistingMetadata } from './lib/fetchers/existing'
import { merge } from 'lodash'
import { fetchCoingeckoMetadata } from './lib/fetchers/coingecko'
import fs from 'fs'

/**
 * Primary generation function.
 *
 * Run via `npm run generate`
 */
function run() {
  console.log('Generating list...')
  buildTokenInfo()
}

try {
  run()
} catch (error) {
  console.error(error)
  process.exit(1)
}

// ----------------------------------------------------------------]

/**
 * Data hierarchy:
 * 1. Existing data, includes overwrites and local images
 * 3. Onchain data
 * 4. Coingecko data (last resort on address my address basis)
 */

async function buildTokenInfo() {
  let network: Network
  let allTokens: TokenInfo[] = []

  for (network in tokens) {
    const tokenAddresses = tokens[network]
    // Fetch onchain data for all tokens via multicall
    const onchainMetadata = await fetchOnchainMetadata(network, tokenAddresses)
    const existingMetadata = await fetchExistingMetadata(network)
    const tokenInfo = await generateTokens(
      network,
      tokenAddresses,
      onchainMetadata,
      existingMetadata
    )
    allTokens = allTokens.concat(tokenInfo)
  }

  const tokenList = buildTokenList(allTokens)

  fs.writeFileSync(
    `./generated/balancer.tokenlist.json`,
    JSON.stringify(tokenList, null, 4),
    (err:) => console.error(err)
  )
}

function buildTokenList(tokens: TokenInfo[]): TokenList {
  const tokenList: TokenList = {
    name: 'Balancer',
    keywords: ['balancer'],
    timestamp: new Date().toISOString(),
    logoURI:
      // eslint-disable-next-line max-len
      'https://raw.githubusercontent.com/balancer/pebbles/master/images/pebbles-pad.256w.png',
    version: {
      major: 1,
      minor: 0,
      patch: 0,
    },
    tokens,
  }

  return tokenList
}

async function generateTokens(
  network: Network,
  tokenAddresses: string[],
  onchainMetadata: PartialTokenInfoMap,
  existingMetadata: PartialTokenInfoMap
): Promise<TokenInfo[]> {
  const tokens: TokenInfo[] = []

  for (const tokenAddress of tokenAddresses) {
    const existingToken = existingMetadata[tokenAddress]
    const onchainToken = onchainMetadata[tokenAddress]
    const tokenInfo = await setTokenInfo(
      tokenAddress,
      network,
      existingToken,
      onchainToken
    )
    if (tokenInfo) tokens.push(tokenInfo)
  }

  return tokens
}

function satisfiesTokenInfoSchema(token: Partial<TokenInfo>): boolean {
  return ['chainId', 'address', 'name', 'symbol', 'decimals', 'logoURI'].every(
    (key) => Object.keys(token).includes(key)
  )
}

async function setTokenInfo(
  address: string,
  network: Network,
  existingMetadata: Partial<TokenInfo>,
  onchainMetadata: Partial<TokenInfo>
): Promise<TokenInfo | undefined> {
  // combine existingMetadata and overwriteMetadata (precedence last to first)
  // We want the onchain data to be used only if it's missing from existing data.
  let metatdata = merge(onchainMetadata, existingMetadata)
  if (satisfiesTokenInfoSchema(metatdata)) {
    return metatdata as TokenInfo
  }

  const coingeckoMetadata = await fetchCoingeckoMetadata(network, address)
  // Again, we want the coingecko data to be used only if it's missing from existing data.
  metatdata = merge(coingeckoMetadata, metatdata)

  if (satisfiesTokenInfoSchema(metatdata)) {
    return metatdata as TokenInfo
  } else {
    console.warn('Failed to generate token info for:', address)
    return undefined
  }
}
