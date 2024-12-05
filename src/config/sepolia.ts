import { dRpcUrl } from './rpc'

export default {
  name: 'sepolia',
  rpc: dRpcUrl('sepolia'),
  coingecko: {
    platformId: 'sepolia',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
}
