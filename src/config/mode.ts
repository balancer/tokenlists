import { dRpcUrl } from './rpc'

export default {
  name: 'mode',
  rpc: dRpcUrl('mode'),
  coingecko: {
    platformId: 'mode',
  },
  trustWalletNetwork: 'mode',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
