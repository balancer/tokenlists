export default {
  name: 'base',
  rpc:
    `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
  coingecko: {
    platformId: 'base',
  },
  trustWalletNetwork: 'base',
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
