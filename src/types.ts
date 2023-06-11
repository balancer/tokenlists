import { TokenInfo, TokenList } from '@uniswap/token-lists'

export enum Network {
  Ethereum = '1',
  Goerli = '5',
  Polygon = '137',
  Arbitrum = '42161',
  Optimism = '10',
  Gnosis = '100',
  Zkevm = '1101',
  Avalanche = '43114',
}

export interface Config {
  coingecko: {
    platformId: string
  }
  trustWalletNetwork: string
  addresses: {
    multicaller: string
  }
}

export type Configs = Record<Network, Config>

export type PartialTokenInfoMap = {
  [address: string]: Partial<TokenInfo>
}

export type TokenListMetadata = Pick<
  TokenList,
  'name' | 'logoURI' | 'keywords' | 'version'
>

export type TokensForList = Record<Network, string[]>
export type OverwritesForList = Partial<
  Record<Network, Record<string, Partial<TokenInfo>>>
>
