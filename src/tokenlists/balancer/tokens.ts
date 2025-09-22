import { Network, TokensForList } from '../../types'
import arbitrum from './tokens/arbitrum'
import hyperevm from './tokens/hyperevm'
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
import sonic from './tokens/sonic'
import plasma from './tokens/plasma'

export const tokens: TokensForList = {
  [Network.Ethereum]: ethereum,
  [Network.Polygon]: polygon,
  [Network.Arbitrum]: arbitrum,
  [Network.Optimism]: optimism,
  [Network.Gnosis]: gnosis,
  [Network.Zkevm]: zkevm,
  [Network.Avalanche]: avalanche,
  [Network.Sepolia]: sepolia,
  [Network.Base]: base,
  [Network.Fantom]: fantom,
  [Network.Fraxtal]: fraxtal,
  [Network.Mode]: mode,
  [Network.Sonic]: sonic,
  [Network.HyperEVM]: hyperevm,
  [Network.Plasma]: plasma,
}
