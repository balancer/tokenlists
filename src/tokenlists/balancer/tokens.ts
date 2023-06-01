import { Network, TokensForList } from '../../types'
import arbitrum from './networks/arbitrum'
import gnosis from './networks/gnosis'
import goerli from './networks/goerli'
import mainnet from './networks/mainnet'
import optimism from './networks/optimism'
import polygon from './networks/polygon'
import zkevm from './networks/zkevm'

export const tokens: TokensForList = {
  [Network.Mainnet]: mainnet,
  [Network.Goerli]: goerli,
  [Network.Polygon]: polygon,
  [Network.Arbitrum]: arbitrum,
  [Network.Optimism]: optimism,
  [Network.Gnosis]: gnosis,
  [Network.Zkevm]: zkevm,
}
