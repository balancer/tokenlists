export default {
  name: 'avalanche',
  rpc: `https://lb.drpc.org/ogrpc?network=avalanche&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'avalanche',
  },
  trustWalletNetwork: 'avalanchec',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
