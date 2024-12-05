export default {
  name: 'gnosis',
  rpc: `https://lb.drpc.org/ogrpc?network=gnosis&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'xdai',
  },
  trustWalletNetwork: 'xdai',
  addresses: {
    multicaller: '0xbb6fab6b627947dae0a75808250d8b2652952cb5',
  },
}
