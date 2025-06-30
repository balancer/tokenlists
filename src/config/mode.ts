export default {
  name: 'mode',
  rpc: `https://lb.drpc.org/ogrpc?network=mode&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'mode',
  },
  trustWalletNetwork: 'mode',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
