export default {
  name: 'plasma',
  rpc: `https://lb.drpc.org/ogrpc?network=plasma&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'plasma',
  },
  trustWalletNetwork: 'plasma',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
