export default {
  name: 'ethereum',
  rpc: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
  coingecko: {
    platformId: 'ethereum',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
  },
}
