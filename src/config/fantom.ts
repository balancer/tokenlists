export default {
  name: 'fantom',
  rpc: `https://fantom-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
  coingecko: {
    platformId: 'fantom',
  },
  trustWalletNetwork: 'fantom',
  addresses: {
    multicaller: '0x66335d7ad8011f6aa3f48aadcb523b62b38ed961',
  },
}
