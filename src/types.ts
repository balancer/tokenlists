import { TokenInfo, TokenList } from '@uniswap/token-lists'

export enum Network {
  Ethereum = '1',
  Optimism = '10',
  Gnosis = '100',
  Polygon = '137',
  Zkevm = '1101',
  Base = '8453',
  Arbitrum = '42161',
  Avalanche = '43114',
  Sepolia = '11155111',
  Fantom = '250',
  Bartio = '80084',
  Fraxtal = '252',
  Mode = '34443',
  Sonic = '146',
  Hyperevm = '999',
  Berachain = '80094',
}

export interface Config {
  name: string
  rpc?: string
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
