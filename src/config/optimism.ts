export default {
  name: 'optimism',
  rpc: `https://lb.drpc.org/ogrpc?network=optimism&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'optimistic-ethereum',
  },
  trustWalletNetwork: 'optimism',
  addresses: {
    multicaller: '0x2DC0E2aa608532Da689e89e237dF582B783E552C',
  },
}
