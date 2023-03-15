import { TokenInfo } from '@uniswap/token-lists'
import { Network } from '../../types'

const platformIdMap: Record<Network, string> = {
  [Network.Mainnet]: 'ethereum',
  [Network.Goerli]: 'goerli',
  [Network.Polygon]: 'polygon-pos',
  [Network.Arbitrum]: 'arbitrum-one',
  [Network.Optimism]: 'optimistic-ethereum',
  [Network.Gnosis]: 'xdai',
}

export async function fetchCoingeckoMetadata(
  network: Network,
  address: string
): Promise<Partial<TokenInfo> | undefined> {
  try {
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
    console.warn(`Coingecko ID not found for token: ${address}`)
    return undefined
  }
}
