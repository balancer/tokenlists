import { TokenInfo, TokenList } from '@uniswap/token-lists'

export enum Network {
  Mainnet = '1',
  Goerli = '5',
  Polygon = '137',
  Arbitrum = '42161',
  Optimism = '10',
  Gnosis = '100',
}

export type PartialTokenInfoMap = {
  [address: string]: Partial<TokenInfo>
}

export type TokenListMetadata = Pick<
  TokenList,
  'name' | 'logoURI' | 'keywords' | 'version'
>

export type TokensForList = Record<Network, string[]>
export type OverwritesForList = Record<
  Network,
  Record<string, Partial<TokenInfo>>
>
