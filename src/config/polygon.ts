export default {
  name: 'polygon',
  rpc: `https://lb.drpc.org/ogrpc?network=polygon&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'polygon-pos',
  },
  trustWalletNetwork: 'polygon',
  addresses: {
    multicaller: '0x275617327c958bD06b5D6b871E7f491D76113dd8',
  },
}
