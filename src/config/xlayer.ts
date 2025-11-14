export default {
  name: 'xlayer',
  rpc: `https://lb.drpc.org/ogrpc?network=xlayer&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'xlayer',
  },
  trustWalletNetwork: 'xlayer',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
