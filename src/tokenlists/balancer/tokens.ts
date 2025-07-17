import { Network, TokensForList } from '../../types'
// import arbitrum from './tokens/arbitrum'
// import avalanche from './tokens/avalanche'
// import base from './tokens/base'
// import gnosis from './tokens/gnosis'
// import ethereum from './tokens/ethereum'
// import optimism from './tokens/optimism'
// import polygon from './tokens/polygon'
// import sepolia from './tokens/sepolia'
// import zkevm from './tokens/zkevm'
// import fantom from './tokens/fantom'
// import bartio from './tokens/bartio'
import berachain from './tokens/berachain'
import hyperevm from './tokens/hyperevm'

export const tokens: TokensForList = {
  [Network.Ethereum]: [],
  [Network.Polygon]: [],
  [Network.Arbitrum]: [],
  [Network.Optimism]: [],
  [Network.Gnosis]: [],
  [Network.Zkevm]: [],
  [Network.Avalanche]: [],
  [Network.Sepolia]: [],
  [Network.Base]: [],
  [Network.Fantom]: [],
  [Network.Bartio]: [],
  [Network.Fraxtal]: [],
  [Network.Mode]: [],
  [Network.Sonic]: [],
  [Network.Hyperevm]: hyperevm,
  [Network.Berachain]: berachain,
}
