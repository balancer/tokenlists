import { Network, Configs } from '../types'
import arbitrum from './arbitrum'
import gnosis from './gnosis'
import goerli from './goerli'
import ethereum from './ethereum'
import optimism from './optimism'
import polygon from './polygon'
import zkevm from './zkevm'

const config: Configs = {
  [Network.Arbitrum]: arbitrum,
  [Network.Gnosis]: gnosis,
  [Network.Goerli]: goerli,
  [Network.Ethereum]: ethereum,
  [Network.Optimism]: optimism,
  [Network.Polygon]: polygon,
  [Network.Zkevm]: zkevm,
}

export default config
