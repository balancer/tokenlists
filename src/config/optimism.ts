export default {
  name: 'optimism',
  rpc: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  coingecko: {
    platformId: 'optimistic-ethereum',
  },
  trustWalletNetwork: 'ethereum',
  addresses: {
    multicaller: '0x2DC0E2aa608532Da689e89e237dF582B783E552C',
  },
}
