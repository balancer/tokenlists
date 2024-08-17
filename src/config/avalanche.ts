export default {
  name: 'avalanche',
  rpc: `https://avax-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
  coingecko: {
    platformId: 'avalanche',
  },
  trustWalletNetwork: 'avalanchec',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
