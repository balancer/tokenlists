export default {
  name: 'monad',
  rpc: `https://lb.drpc.org/ogrpc?network=monad&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'monad',
  },
  trustWalletNetwork: 'monad',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
