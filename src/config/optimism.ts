import { dRpcUrl } from './rpc'

export default {
  name: 'optimism',
  rpc: dRpcUrl('optimism'),
  coingecko: {
    platformId: 'optimistic-ethereum',
  },
  trustWalletNetwork: 'optimism',
  addresses: {
    multicaller: '0x2DC0E2aa608532Da689e89e237dF582B783E552C',
  },
}
