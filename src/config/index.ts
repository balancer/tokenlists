import { Network, Configs } from '../types'
import arbitrum from './arbitrum'
import gnosis from './gnosis'
import goerli from './goerli'
import mainnet from './mainnet'
import optimism from './optimism'
import polygon from './polygon'
import zkevm from './zkevm'

const config: Configs = {
  [Network.Arbitrum]: arbitrum,
  [Network.Gnosis]: gnosis,
  [Network.Goerli]: goerli,
  [Network.Mainnet]: mainnet,
  [Network.Optimism]: optimism,
  [Network.Polygon]: polygon,
  [Network.Zkevm]: zkevm,
}

export default config
