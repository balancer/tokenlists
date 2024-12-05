import { dRpcUrl } from './rpc'

export default {
  name: 'ethereum',
  rpc: dRpcUrl('ethereum'),
  coingecko: {
    platformId: 'ethereum',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
  },
}
