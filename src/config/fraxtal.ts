export default {
  name: 'fraxtal',
  rpc: `https://lb.drpc.org/ogrpc?network=fraxtal&dkey=${process.env.DRPC_KEY}`,
  coingecko: {
    platformId: 'frax',
  },
  trustWalletNetwork: 'frax', // not a supported chain https://github.com/trustwallet/assets/tree/master/blockchains
  addresses: {
    multicaller: '0xca11bde05977b3631167028862be2a173976ca11',
  },
}
