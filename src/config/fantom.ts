import { dRpcUrl } from './rpc'

export default {
  name: 'fantom',
  rpc: dRpcUrl('fantom'),
  coingecko: {
    platformId: 'fantom',
  },
  trustWalletNetwork: 'fantom',
  addresses: {
    multicaller: '0x66335d7ad8011f6aa3f48aadcb523b62b38ed961',
  },
}
