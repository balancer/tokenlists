import { tokens } from './all.tokens'
import { overwrites } from './all.overwrites'
import existingTokenlist from './generated/all.tokenlist.json'
import { TokenList, TokenInfo } from '@uniswap/token-lists'
import { Network } from './types'

/**
 * Primary generation function.
 *
 * Run via `npm run generate`
 */
function run() {
  console.log('Generating list...')
  const tokenInfo: TokenInfo[] = buildTokenInfo()
}

try {
  run()
} catch (error) {
  console.error(error)
  process.exit(1)
}

// ----------------------------------------------------------------

async function buildTokenInfo(): Promise<TokenInfo[]> {
  for (const [network, tokenAddresses] of Object.entries(tokens)) {
    console.log(`${network}: ${tokenAddresses}`)
    // Fetch onchain data for all tokens via multicall
  }
}

function setTokenInfo(
  address: string,
  network: Network,
  existingMetadata: TokenInfo,
  overwriteMetadata: Partial<TokenInfo>
) {
  // combine existingMetadata and overwriteMetadata
  // check if this satifies the TokenInfo scheam
  // if so, return it
  // else, fetch onchain and coingecko data
  // use that to complete the schema
  // return it
}
