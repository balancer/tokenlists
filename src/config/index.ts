import { Network, Configs } from '../types'
import arbitrum from './arbitrum'
import avalanche from './avalanche'
import base from './base'
import gnosis from './gnosis'
import ethereum from './ethereum'
import optimism from './optimism'
import polygon from './polygon'
import sepolia from './sepolia'
import zkevm from './zkevm'
import fantom from './fantom'
import fraxtal from './fraxtal'

const config: Configs = {
  [Network.Arbitrum]: arbitrum,
  [Network.Avalanche]: avalanche,
  [Network.Base]: base,
  [Network.Gnosis]: gnosis,
  [Network.Ethereum]: ethereum,
  [Network.Optimism]: optimism,
  [Network.Polygon]: polygon,
  [Network.Sepolia]: sepolia,
  [Network.Zkevm]: zkevm,
  [Network.Fantom]: fantom,
  [Network.Fraxtal]: fraxtal,
}

export default config
