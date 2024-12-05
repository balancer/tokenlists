import { dRpcUrl } from './rpc'

export default {
  name: 'fraxtal',
  rpc: dRpcUrl('fraxtal'),
  coingecko: {
    platformId: 'frax',
  },
  trustWalletNetwork: 'frax', // not a supported chain https://github.com/trustwallet/assets/tree/master/blockchains
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
