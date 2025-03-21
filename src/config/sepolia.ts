export default {
  name: 'sepolia',
  rpc: `https://lb.drpc.org/ogrpc?network=sepolia&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'sepolia',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
}
