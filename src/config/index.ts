import { Configs, Network } from '../types'
import arbitrum from './arbitrum'
import avalanche from './avalanche'
import bartio from './bartio'
import base from './base'
import berachain from './berachain'
import ethereum from './ethereum'
import fantom from './fantom'
import fraxtal from './fraxtal'
import gnosis from './gnosis'
import hyperevm from './hyperevm'
import mode from './mode'
import optimism from './optimism'
import polygon from './polygon'
import sepolia from './sepolia'
import sonic from './sonic'
import zkevm from './zkevm'

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
  [Network.Bartio]: bartio,
  [Network.Fraxtal]: fraxtal,
  [Network.Mode]: mode,
  [Network.Sonic]: sonic,
  [Network.Hyperevm]: hyperevm,
  [Network.Berachain]: berachain,
}

export default config
