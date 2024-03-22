import { Network, TokensForList } from '../../types'
import arbitrum from './tokens/arbitrum'
import avalanche from './tokens/avalanche'
import base from './tokens/base'
import gnosis from './tokens/gnosis'
import goerli from './tokens/goerli'
import ethereum from './tokens/ethereum'
import optimism from './tokens/optimism'
import polygon from './tokens/polygon'
import sepolia from './tokens/sepolia'
import zkevm from './tokens/zkevm'
import fantom from './tokens/fantom'

export const tokens: TokensForList = {
  [Network.Ethereum]: ethereum,
  [Network.Goerli]: goerli,
  [Network.Polygon]: polygon,
  [Network.Arbitrum]: arbitrum,
  [Network.Optimism]: optimism,
  [Network.Gnosis]: gnosis,
  [Network.Zkevm]: zkevm,
  [Network.Avalanche]: avalanche,
  [Network.Sepolia]: sepolia,
  [Network.Base]: base,
  [Network.Fantom]: fantom,
}
