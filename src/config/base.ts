export default {
  name: 'base',
  rpc: `https://lb.drpc.org/ogrpc?network=base&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'base',
  },
  trustWalletNetwork: 'base',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
