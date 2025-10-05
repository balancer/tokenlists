export default {
  name: 'hyperevm',
  rpc: `https://lb.drpc.org/ogrpc?network=hyperliquid&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'hyperevm',
  },
  trustWalletNetwork: 'hyperliquid',
  addresses: {
    multicaller: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
}
