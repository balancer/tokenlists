export default {
  name: 'gnosis',
  rpc: `https://gnosis-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
  coingecko: {
    platformId: 'xdai',
  },
  trustWalletNetwork: 'xdai',
  addresses: {
    multicaller: '0xbb6fab6b627947dae0a75808250d8b2652952cb5',
  },
}
