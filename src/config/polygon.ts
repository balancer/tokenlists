export default {
  name: 'polygon',
  rpc: 
  `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
  coingecko: {
    platformId: 'polygon-pos',
  },
  trustWalletNetwork: 'polygon',
  addresses: {
    multicaller: '0x275617327c958bD06b5D6b871E7f491D76113dd8',
  },
}
