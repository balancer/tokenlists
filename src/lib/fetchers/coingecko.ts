import { TokenInfo } from '@uniswap/token-lists'
import chalk from 'chalk'
import { Network } from '../../types'
import { sleep } from '../utils'

const platformIdMap: Record<Network, string> = {
  [Network.Mainnet]: 'ethereum',
  [Network.Goerli]: 'goerli',
  [Network.Polygon]: 'polygon-pos',
  [Network.Arbitrum]: 'arbitrum-one',
  [Network.Optimism]: 'optimistic-ethereum',
  [Network.Gnosis]: 'xdai',
}

let callIndex = 0

export async function fetchCoingeckoMetadata(
  network: Network,
  address: string
): Promise<Partial<TokenInfo> | undefined> {
  try {
    callIndex++
    // Coingecko rate limits their API to 10 calls/second
    if (callIndex > 0 && callIndex % 10 === 0) {
      console.log(chalk.dim('Waiting for 2s to avoid Coingecko rate limit'))
      await sleep(2000)
    }

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${
        platformIdMap[network]
      }/contract/${address.toLowerCase()}`
    )

    const { data } = await response.json()

    const {
      name,
      symbol,
      image: { large: logoURI },
    } = data

    return {
      address,
      name,
      symbol,
      logoURI,
    }
  } catch (e) {
    console.log(chalk.dim(`Coingecko (not found): ${address}`))
    return undefined
  }
}
