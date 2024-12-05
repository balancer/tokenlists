import { dRpcUrl } from './rpc'

export default {
  name: 'polygon',
  rpc: dRpcUrl('polygon'),
  coingecko: {
    platformId: 'polygon-pos',
  },
  trustWalletNetwork: 'polygon',
  addresses: {
    multicaller: '0x275617327c958bD06b5D6b871E7f491D76113dd8',
  },
}
