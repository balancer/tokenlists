export default {
  name: 'arbitrum',
  rpc: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
  coingecko: {
    platformId: 'arbitrum-one',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  },
}
