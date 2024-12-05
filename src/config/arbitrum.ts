export default {
  name: 'arbitrum',
  rpc: `https://lb.drpc.org/ogrpc?network=arbitrum&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'arbitrum-one',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  },
}
