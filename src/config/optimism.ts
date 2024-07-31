export default {
  name: 'optimism',
  rpc: 
  `https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
  coingecko: {
    platformId: 'optimistic-ethereum',
  },
  trustWalletNetwork: 'optimism',
  addresses: {
    multicaller: '0x2DC0E2aa608532Da689e89e237dF582B783E552C',
  },
}
