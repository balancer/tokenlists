import { Network, TokensForList } from '../../types'
import arbitrum from './tokens/arbitrum'
import avalanche from './tokens/avalanche'
import base from './tokens/base'
import gnosis from './tokens/gnosis'
import ethereum from './tokens/ethereum'
import optimism from './tokens/optimism'
import polygon from './tokens/polygon'
import sepolia from './tokens/sepolia'
import zkevm from './tokens/zkevm'
import fantom from './tokens/fantom'
import fraxtal from './tokens/fraxtal'
import mode from './tokens/mode'

export const tokens: TokensForList = {
  [Network.Ethereum]: ethereum,
  [Network.Polygon]: polygon,
  [Network.Arbitrum]: arbitrum,
  [Network.Optimism]: optimism,
  [Network.Gnosis]: gnosis,
  [Network.Zkevm]: zkevm,
  [Network.Avalanche]: avalanche,
  [Network.Sepolia]: sepolia,
  [Network.Base]: base,0x7c34c84347AF3d06e0A6a6059a6A299fb16d2486
  [Network.Fantom]: fantom,
  [Network.Fraxtal]: fraxtal,
  [Network.Mode]: mode,
}
