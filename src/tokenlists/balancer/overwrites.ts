/* eslint-disable max-len */
import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  [Network.Ethereum]: {
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': {
      name: 'Wrapped Ether',
    },
    '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8': {
      name: 'Curve.fi Y Pool Token',
      symbol: 'yCRV',
      decimals: 18,
    },
    '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359': {
      name: 'Sai Stablecoin v1.0',
      symbol: 'SAI',
      decimals: 18,
    },
    '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A': {
      name: 'DigixDAO DGD Token',
      symbol: 'DGD',
      decimals: 9,
    },
    '0x960b236A07cf122663c4303350609A66A7B288C0': {
      name: 'Aragon v1',
      symbol: 'ANT (old)',
      decimals: 18,
    },
    '0x0Ba45A8b5d5575935B8158a88C631E9F9C95a2e5': {
      name: 'Tellor Tributes',
      symbol: 'TRB (old)',
      decimals: 18,
    },
    '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2': {
      decimals: 18,
      symbol: 'MKR',
      name: 'Maker',
    },
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': {
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    },
    '0x304A2050dF259DCA35335C90CE983AdC5f2Dc50C': {
      decimals: 18,
      symbol: 'sWETH',
      name: 'Sturdy Wrapped ETH',
    },
    '0x2BBf681cC4eb09218BEe85EA2a5d3D13Fa40fC0C': {
      decimals: 18,
      symbol: 'bb-a-USDT (old)',
      name: 'Balancer Aave Boosted Pool (USDT)',
    },
    '0x804CdB9116a10bB78768D3252355a1b18067bF8f': {
      decimals: 18,
      symbol: 'bb-a-DAI (old)',
      name: 'Balancer Aave Boosted Pool (DAI)',
    },
    '0x9210F1204b5a24742Eba12f710636D76240dF3d0': {
      decimals: 18,
      symbol: 'bb-a-USDC (old)',
      name: 'Balancer Aave Boosted Pool (USDC)',
    },
    '0x7B50775383d3D6f0215A8F290f2C9e2eEBBEceb2': {
      decimals: 18,
      symbol: 'bb-a-USD (old)',
      name: 'Balancer Aave Boosted StablePool (USD)',
    },
    '0xE95A203B1a91a908F9B9CE46459d101078c2c3cb': {
      decimals: 18,
      symbol: 'ankrETH',
      name: 'Ankr Staked ETH',
    },
    '0x9559Aaa82d9649C7A7b220E7c461d2E74c9a3593': {
      decimals: 18,
      symbol: 'staFi rETH',
      name: 'staFi rETH',
    },
    '0xEb91861f8A4e1C12333F42DCE8fB0Ecdc28dA716': {
      decimals: 18,
      symbol: 'eUSDC',
      name: 'Euler Pool: USD Coin',
    },
    '0x4d19F33948b99800B6113Ff3e83beC9b537C85d2': {
      decimals: 18,
      symbol: 'eUSDT',
      name: 'Euler Pool: Tether USD',
    },
    '0xe025E3ca2bE02316033184551D4d3Aa22024D9DC': {
      decimals: 18,
      symbol: 'eDAI',
      name: 'Euler Pool: Dai Stablecoin',
    },
    '0xa2E3356610840701BDf5611a53974510Ae27E2e1': {
      decimals: 18,
      symbol: 'wBETH',
      name: 'Wrapped Beacon ETH',
    },
    '0x02c2d189b45ce213a40097b62d311cf0dd16ec92': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Ethereum USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x65799b9fd4206cdaa4a1db79254fcbc2fd2ffee6': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x862c57d48becb45583aeba3f489696d22466ca1b': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
  },
  [Network.Polygon]: {
    '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
    },
    '0x1D607Faa0A51518a7728580C238d912747e71F7a': {
      name: 'Data Economy Index',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x33d63Ba1E57E54779F7dDAeaA7109349344cf5F1/logo.png',
    },
    '0x282d8efCe846A88B159800bd4130ad77443Fa1A1': {
      name: 'Ocean Protocol',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x967da4048cD07aB37855c090aAF366e4ce1b9F48/logo.png',
    },
    '0x2934b36ca9A4B31E633C5BE670C8C8b28b6aA015': {
      name: 'THX Network',
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/refactor-for-multichain/assets/0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015.png',
    },
    '0xC8A94a3d3D2dabC3C1CaffFFDcA6A7543c3e3e65': {
      name: 'Gemini Dollar',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd/logo.png',
    },
    '0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8': {
      name: 'Gnosis',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png',
    },
    '0x263534a4Fe3cb249dF46810718B7B612a30ebbff': {
      name: 'Perpetual Protocol',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xbC396689893D065F41bc2C6EcbeE5e0085233447/logo.png',
    },
    '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b': {
      name: 'Avalanche',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/2563ac9dc5369d8e3255cde663cf7f08e3c58914/blockchains/avalanchec/info/logo.png',
    },
    '0x3066818837c5e6eD6601bd5a91B0762877A6B731': {
      name: 'UMA Protocol',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png',
    },
    '0x87ff96aba480f1813aF5c780387d8De7cf7D8261': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png',
    },
    '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619': {
      name: 'Wrapped Ether',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    '0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4': {
      name: 'Solana',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/2563ac9dc5369d8e3255cde663cf7f08e3c58914/blockchains/solana/info/logo.png',
    },
    '0xE7804D91dfCDE7F776c90043E03eAa6Df87E6395': {
      name: 'DFX Token',
      logoURI:
        'https://raw.githubusercontent.com/dfx-finance/assets/add-dfx-logov3/blockchains/ethereum/assets/0x888888435FDe8e7d4c54cAb67f206e4199454c60/logo.png',
    },
    '0xF501dd45a1198C2E1b5aEF5314A68B9006D842E0': {
      name: 'Meta',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2/logo.png',
    },
    '0xfBd8A3b908e764dBcD51e27992464B4432A1132b': {
      name: 'Index',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0954906da0Bf32d5479e25f46056d22f08464cab/logo.png',
    },
    '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D/logo.png',
    },
    '0xDB7Cb471dd0b49b29CAB4a1C14d070f27216a0Ab': {
      name: 'Bankless DAO',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198/logo.png',
    },
    '0xbD7A5Cf51d22930B8B3Df6d834F9BCEf90EE7c4f': {
      name: 'Ethereum Name Service',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72/logo.png',
    },
    '0xdb95f9188479575F3F718a245EcA1B3BF74567EC': {
      name: 'Gitcoin',
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0xde30da39c46104798bb5aa3fe8b9e0e1f348163f.png',
    },
    '0xEC38621e72D86775a89C7422746de1f52bbA5320': {
      symbol: 'DUSD',
      name: 'DUSD',
    },
    '0xc04296aa4534f5a3bab2d948705bc89317b2f1ed': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Ethereum USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x2dca80061632f3f87c9ca28364d1d0c30cd79a19': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x31f5ac91804a4c0b54c0243789df5208993235a1': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x87a1fdc4c726c459f597282be639a045062c0e46': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x109b890060ae0249c1e67BF85931C1a087A0A5A3': {
      name: 'Swiss Green Gold ETP',
      symbol: 'AUCO2',
      decimals: 18,
    },
  },
  [Network.Arbitrum]: {
    '0xfc675adfdd721064ba923d07a8a238a9e52d8ace': {
      extensions: {
        coingeckoId: 'parifi',
      },
    },
    '0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
    },
    '0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png',
    },
    '0x23A941036Ae778Ac51Ab04CEa08Ed6e2FE103614': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc944E90C64B2c07662A292be6244BDf05Cda44a7/logo.png',
    },
    '0x2e9a6Df78E42a30712c10a9Dc4b1C8656f8F2879': {
      name: 'Maker',
      symbol: 'MKR',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
    },
    '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
    '0x354A6dA3fcde098F8389cad84b0182725c6C91dE': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png',
    },
    '0x8038F3C971414FD1FC220bA727F2D4A0fC98cb65': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xca1207647Ff814039530D7d35df0e1Dd2e91Fa84/logo.png',
    },
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    '0x82e3A8F066a6989666b031d916c43672085b1582': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png',
    },
    '0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png',
    },
    '0xa684cd057951541187f288294a1e1C2646aA2d24': {
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/refactor-for-multichain/assets/0xa684cd057951541187f288294a1e1c2646aa2d24.png',
    },
    '0xA970AF1a584579B618be4d69aD6F73459D112F95': {
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png',
    },
    '0xB965029343D55189c25a7f3e0c9394DC0F5D41b1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x86772b1409b61c639EaAc9Ba0AcfBb6E238e5F83/logo.png',
    },
    '0xC3Ae0333F0F34aa734D5493276223d95B8F9Cb37': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xa1d65E8fB6e87b60FECCBc582F7f97804B725521/logo.png',
    },
    '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png',
    },
    '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    },
    '0xef888bcA6AB6B1d26dbeC977C455388ecd794794': {
      logoURI:
        'https://assets.coingecko.com/coins/images/12900/large/Rari_Logo_Transparent.png?1613978014',
    },
    '0xf4D48Ce3ee1Ac3651998971541bAdbb9A14D7234': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2ba592F78dB6436527729929AAf6c908497cB200/logo.png',
    },
    '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    },
    '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
    },
    '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8': {
      symbol: 'USDC.e',
      name: 'Bridged USDC',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    '0xaf88d065e77c8cC2239327C5EDb3A432268e5831': {
      symbol: 'USDC',
      name: 'USDC Coin',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    '0x3a301e7917689b8e8a19498b8a28fc912583490c': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Ethereum USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x7cfadfd5645b50be87d546f42699d863648251ad': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0xbde67e089886ec0e615d6f054bc6f746189a3d56': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x8b5541b773dd781852940490b0c3dc1a8cdb6a87': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0xb165a74407fe1e519d6bcbdec1ed3202b35a4140': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0xD8724322f44E5c58D7A815F542036fb17DbbF839': {
      logoURI:
        'https://assets.coingecko.com/coins/images/29734/standard/woeth-200x200.png?1714796686',
    },
    '0xca5d8f8a8d49439357d3cf46ca2e720702f132b8': {
      extensions: {
        coingeckId: 'gyroscope-gyd',
      },
    },
  },
  [Network.Optimism]: {
    '0xe05A08226c49b636ACf99c40Da8DC6aF83CE5bB3': {
      logoURI:
        'https://www.ankr.com/_next/static/images/ethereum-ankreth-logo-794cb04ee270a7cb5c8559924aa5211d.png',
    },
    '0x97513e975a7fA9072c72C92d8000B0dB90b163c5': {
      symbol: 'multiBeets',
      name: 'multiBeets',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x9f281eb58fd98ad98ede0fc4c553ad4d73e7ca2c': {
      decimals: 6,
      symbol: 'AaveUSDCe',
      name: 'Static Aave Ethereum USDC.e',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x4dd03dfd36548c840b563745e3fbec320f37ba7e': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x035c93db04e5aaea54e6cd0261c492a3e0638b37': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x7F5c764cBc14f9669B88837ca1490cCa17c31607': { symbol: 'USDC.e' },
    '0x39FdE572a18448F8139b7788099F0a0740f51205': {
      name: 'OATH',
      symbol: 'OATHv1',
    },
    '0xb4Bc46bc6cB217B59ea8F4530BaE26Bf69F677f0': { name: 'Beethoven X' },
    '0xc96f4F893286137aC17e07Ae7F217fFca5db3AB6': {
      logoURI:
        'https://assets.coingecko.com/coins/images/29116/large/20230223_224134.jpg?1677224110',
    },
    '0x00e1724885473B63bCE08a9f0a52F35b0979e35A': {
      name: 'OATH',
      symbol: 'OATHv2',
    },
    '0x3e9cBFfd270AE67aBB09D28988e7e785498c7373': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/boosted-OP-enclosed%402x.png',
    },
    '0xc83c23DBA4a008d7Df46cd50Ad144ae856b6B1Be': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/boosted-sUSD-enclosed%402x.png',
    },
    '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d': {
      name: 'Qi Dao',
      symbol: 'QI (old)',
      logoURI:
        'https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969',
    },
    '0x0c5b4c92c948691EEBf185C17eeB9c230DC019E9': {
      name: 'Pickle Finance',
      logoURI:
        'https://assets.coingecko.com/coins/images/12435/large/0M4W6Yr6_400x400.jpg?1643006080',
    },
    '0x1509706a6c66CA549ff0cB464de88231DDBe213B': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/aura.png',
    },
    '0xb45ad160634c528cc3d2926d9807104fa3157305': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xFC2E6e6BCbd49ccf3A5f029c79984372DcBFE527': {
      extensions: {
        coingeckoId: 'autonolas',
      },
    },
    '0x2218a117083f5B482B0bB821d27056Ba9c04b1D3': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x83f20f44975d03b1b09e64809b757c47f942beea.png',
    },
    '0x5A7fACB970D094B6C7FF1df0eA68D99E6e73CBFF': {
      logoURI: 'https://etherscan.io/token/images/etherfiweeth_32.png',
      extensions: {
        coingeckId: 'wrapped-eeth',
      },
    },
  },
  [Network.Gnosis]: {
    '0x7eF541E2a22058048904fE5744f9c7E4C57AF717': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
    },
    '0x0aa1e96d2a46ec6beb2923de1e61addf5f5f1dce': {
      symbol: 'REG',
      name: 'Realt Ecosystem Governance',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x_regtoken.png',
    },
  },
  [Network.Zkevm]: {
    '0x37eAA0eF3549a5Bb7D431be78a3D99BD360d19e5': {
      symbol: 'USDC.e',
      address: '0x37eAA0eF3549a5Bb7D431be78a3D99BD360d19e5',
      name: 'USDC.e',
      decimals: 6,
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5.png',
    },
    '0xCA5d8F8a8d49439357d3CF46Ca2e720702F132b8': {
      symbol: 'GYD',
      address: '0xCA5d8F8a8d49439357d3CF46Ca2e720702F132b8',
      name: 'Gyroscope',
      decimals: 18,
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xca5d8f8a8d49439357d3cf46ca2e720702f132b8.png',
    },
  },
  [Network.Base]: {
    '0x1f55a02A049033E3419a8E2975cF3F572F4e6E9A': {
      extensions: {
        coingeckoId: 'staked-frax-ether',
      },
    },
    '0x4EA71A20e655794051D1eE8b6e4A3269B13ccaCc': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Base USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x99aC4484e8a1dbd6A185380B3A811913Ac884D87': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x83f20f44975d03b1b09e64809b757c47f942beea.png',
    },
  },
  [Network.Fantom]: {
    '0xf1648C50d2863f780c57849D812b4B7686031A3D': {
      name: 'LayerZero Wrapped Bitcoin',
      symbol: 'lzWBTC',
    },
    '0x448d59B4302aB5d2dadf9611bED9457491926c8e': {
      name: 'Axelar Wrapped Bitcoin',
      logoURI:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    },
    '0x321162Cd933E2Be498Cd2267a90534A804051b11': {
      name: 'Multichain Wrapped Bitcoin',
      symbol: 'multiWBTC',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x695921034f0387eAc4e11620EE91b1b15A6A09fE': {
      name: 'LayerZero Wrapped Ethereum',
      symbol: 'lzWETH',
    },
    '0xfe7eDa5F2c56160d406869A8aA4B2F365d544C7B': {
      name: 'Axelar Wrapped Ethereum',
      symbol: 'axlWETH',
    },
    '0x74b23882a30290451A17c44f4F05243b6b58C76d': {
      name: 'Multichain Wrapped Ethereum',
      symbol: 'multiWETH',
      extensions: {
        coingeckoId: null,
      },
    },
    '0xcc1b99dDAc1a33c201a742A1851662E87BC7f22C': {
      name: 'LayerZero USDT',
      symbol: 'lzUSDT',
    },
    '0x049d68029688eAbF473097a2fC38ef61633A3C7A': {
      name: 'Multichain Frapped USDT',
      symbol: 'multiFUSDT',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x1B6382DBDEa11d97f24495C9A90b7c88469134a4': { name: 'Axelar USDC' },
    '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf': {
      name: 'LayerZero USD Coin',
      symbol: 'lzUSDC',
    },
    '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75': {
      name: 'Multichain USD Coin',
      symbol: 'multiUSDC',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x91a40C733c97a6e1BF876EaF9ed8c08102eB491f': {
      name: 'LayerZero Dai',
      symbol: 'lzDAI',
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/dai-128.png',
    },
    '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E': {
      name: 'Multichain Dai',
      symbol: 'multiDAI',
      extensions: {
        coingeckoId: null,
      },
    },
    '0xd7028092c830b5C8FcE061Af2E593413EbbC1fc1': {
      name: 'BeethovenX sFTMX',
      symbol: 'sFTMx',
    },
    '0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e': { name: 'Beethoven X' },
    '0xDE1E704dae0B4051e80DAbB26ab6ad6c12262DA0': {
      logoURI:
        'https://assets.coingecko.com/coins/images/18779/large/DEI-logo-round-white-3.png?1646300101',
    },
    '0xC5e2B037D30a390e62180970B3aa4E91868764cD': {
      name: 'oldTarot',
      symbol: 'oldTAROT',
    },
    '0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7': {
      name: 'Qi Dao',
      logoURI:
        'https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969',
    },
    '0x80Fe671E580CD1D95B2Dcd8EA09233DF06C81C7b': {
      logoURI:
        'https://www.tarot.to/assets/images/token-icons/0x80Fe671E580CD1D95B2Dcd8EA09233DF06C81C7b.png',
    },
    '0x84F8D24231DfbBfae7f39415cD09c8f467729fc8': {
      name: 'Cosmic Cash',
      logoURI: 'https://mineempire.io/assets/csc-256x256.png',
    },
    '0xDE12c7959E1a72bbe8a5f7A1dc8f8EeF9Ab011B3': {
      name: 'old _DEI',
      symbol: 'old_DEI',
      logoURI:
        'https://assets.coingecko.com/coins/images/18779/small/DEI-logo-round-white-3.png?1646300101',
    },
    '0x250CD2c6B7259a0621d1C2997C48dDdbEA54A5A6': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/Bwool_logo_round.svg',
    },
    '0xE5586582E1a60E302a53e73E4FaDccAF868b459a': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/xrlc.png',
    },
    '0xbf4906762C38F50bC7Be0A11BB452C944f6C72E1': {
      logoURI:
        'https://app.fbomb.finance/images/tokens/0xbf4906762C38F50bC7Be0A11BB452C944f6C72E1.png',
    },
    '0xc5713B6a0F26bf0fdC1c52B90cd184D950be515C': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/linspirit.png',
    },
    '0xF04A45b429eB5930a85884141C530147Db0f609E': {
      logoURI:
        'https://valhalla-dao.com/wp-content/uploads/2023/02/logo1-1.png',
    },
    '0x62227c75908b7d358a9d70eA4670F57f8b012Ccc': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/mFTM-Token-BlackBlue.png',
    },
    '0x4f76664105ba7E35dD4904eC70F2042fc17563d9': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/icon_white.png',
    },
    '0x454d4BaE7c2adab588d837aFF4Db16Db19d46A33': {
      name: 'Good Morning FTM',
      logoURI: 'https://i.ibb.co/12RsJ9g/GMFTMTOKENfuneral.png',
    },
    '0x08d70A47D3f28BbF755ae050a783844b40ae5761': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/kelvin.png',
    },
    '0x6CAa3e5FebA1f83ec1d80EA2EAca37C3421C33A8': {
      logoURI:
        'https://www.tarot.to/assets/images/token-icons/0x6CAa3e5FebA1f83ec1d80EA2EAca37C3421C33A8.png',
    },
    '0x031305e65166c26F0666353c021c563B4a7c9ca2': {
      name: 'Truth',
      logoURI: 'https://eyeoftruth.io/static/media/MAAT.png',
    },
    '0x73E30eb2e469cc542d86397bECA97Ea6547e1cA7': {
      name: 'Sanik',
      logoURI:
        'https://equalizer.exchange/assets/fantom/token/0x73e30eb2e469cc542d86397beca97ea6547e1ca7.png',
    },
    '0x68EFc4716507709691d5e7AD9906a44FaBCdb1CA': {
      logoURI: 'https://app.mineempire.io/assets/gem-256x256.png',
    },
    '0x59D07a115fe3FFe5db3D52029D43Cc0ef5e9ba08': {
      logoURI:
        'https://assets.coingecko.com/coins/images/22522/large/KmzajETygnMWAKm05ljiI3pc7_JTIdu_H6hhOgaRc-ICj0M9geEpF83iceGbQ6U2PByY3A3jwkHFC0zLEycnplJpUcqb_cl0QV89fPI_h3XdflDh9Sroq22uFfvwQ8lCjl7EFiIKpr-fGbW2ArkJEdPkWL6UJu5DbE6YArcksukEcc_8cpryHjchAdd-imlOugScNPswFZzMqb.jpg?1641970344',
    },
    '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945': {
      name: 'BIFI Maxi',
      symbol: 'mooBIFI',
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/mooBIFI.png',
    },
    '0xcdE5a11a4ACB4eE4c805352Cec57E236bdBC3837': {
      symbol: 'BPT-BEETS-FTM ',
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/fidelio-duetto.png',
    },
    '0x953Cd009a490176FcEB3a26b9753e6F01645ff28': {
      symbol: 'XDEUS',
      logoURI:
        'https://assets.coingecko.com/coins/images/28702/large/xDEUS_logo_200x200.png?1673425416',
    },
    '0xF386eB6780a1e875616b5751794f909095283860': {
      name: 'fMulti',
      symbol: 'fMULTI',
      logoURI: 'https://maxflowO2.com/img/image.png',
    },
    '0x96312c36cB278bB84BB1c180E33f17b8857fFFab': {
      logoURI:
        'https://raw.githubusercontent.com/firebird-finance/firebird-assets/master/blockchains/fantom/assets/0x96312c36cB278bB84BB1c180E33f17b8857fFFab/logo.png',
    },
    '0x0C9393d08B817a6dA19381ED86D03FF64E11F9b0': {
      logoURI: 'https://i.imgur.com/GGzuFKw.png',
    },
    '0xE3e0EBA90185e7292B9Ca92c7409cDEf504F9d07': {
      logoURI: 'https://i.imgur.com/VO0SnyG.png',
    },
    '0x524CAbe5b2F66CBd6F6b08dEf086F18F8DdE033a': {
      logoURI: 'https://i.ibb.co/b37Gktw/BICO-Ticker-01.png',
    },
    '0xfcef8a994209d6916EB2C86cDD2AFD60Aa6F54b1': {
      name: 'Fresh BEETS',
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/fBEETS.png',
    },
    '0xC09A82aD5075B3067D80F54f05e1E22229699Cc1': {
      logoURI:
        'https://assets.coingecko.com/coins/images/24109/large/logo-blue.png?1646376874',
    },
    '0x2B6850bF31874d96A21eD4Dc7C6415B9640BE2A4': {
      logoURI: 'https://www.fantomon.net/plasmagunk.png',
    },
    '0xcfc785741dc0e98ad4c9f6394bb9d43cd1ef5179': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0xddcb3ffd12750b45d32e084887fdf1aabab34239': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x10010078a54396f62c96df8532dc2b4847d47ed3': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x6a07a792ab2965c72a5b8088d3a069a7ac3a993b': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x5a27c97Bf717F455c9eeb838a53Fb9F044509C59': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x5a27c97bf717f455c9eeb838a53fb9f044509c59.png?size=lg&key=99a609',
    },
    '0xA80058bDf71F4044942107e33a802752B3bfB4d0': {
      logoURI:
        'https://static.wixstatic.com/media/a79209_65ac74b375c94fb5a04c2e91f7b8c3d4~mv2.png/v1/crop/x_606,y_187,w_2870,h_2971/fill/w_262,h_272,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/oo2png.png',
    },
    '0xb5Fd949436772E07CbBF35Fb6524e79924c54CB3': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0xb5fd949436772e07cbbf35fb6524e79924c54cb3.png?size=lg&key=16c774',
    },
    '0x1f008f9af47b387BDF67a25f2B8219942207298f': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x1f008f9af47b387bdf67a25f2b8219942207298f.png?size=lg&key=327682',
    },
    '0xd361474bB19C8b98870bb67F5759cDF277Dee7F9': {
      logoURI:
        'https://moonmasters.mypinata.cloud/ipfs/QmWTSjcjffhJKas33GHMcLbmjSEKq3wVvKroCZAAmyxoVd',
    },
    '0x0E3B1C9be555Ec9806f6eaB9bd101487F53CF0C9': {
      logoURI: 'https://i.ibb.co/GRtqh61/Grok-Fantom-Logo.png',
    },
    '0x9Ab1070d74216a5F627c6937C0767eA5b990C3d8': {
      logoURI: 'https://i.ibb.co/W5t3Ssj/IMG-3827-modified.png',
    },
    '0x5cF90b977C86415a53CE3B7bE13b26f6abdDfee2': {
      logoURI:
        'https://equalizer.exchange/assets/fantom/token/0x5cf90b977c86415a53ce3b7be13b26f6abddfee2.png',
    },
    '0xC8065302b6877416C095aCe72278ec4CcEa664Bb': {
      logoURI:
        'https://images.squarespace-cdn.com/content/v1/65e6002864f3a87b0f25b49b/f7364673-e0ee-4e47-b827-fe4dbc8fde18/IMG_20240303_134442_043.jpg?format=1000w',
    },
    '0x24b06ef70Da341486eBf96A5Ea6De1AE8881D106': {
      logoURI:
        'https://pbs.twimg.com/profile_images/1766713023912366080/ho41faiY.jpg',
    },
    '0x46E64b8cd1811Ddc9899d607f24deBC46B7A611C': {
      logoURI:
        'hhttps://dd.dexscreener.com/ds-data/tokens/fantom/0x46e64b8cd1811ddc9899d607f24debc46b7a611c.png?size=lg&key=076652',
    },
    '0x29cfbAB01CA34864402F4c0F20837a5f05490D69': {
      logoURI:
        'https://pbs.twimg.com/profile_images/1748096711153549312/qW2vGT-9.jpg',
    },
    '0x4CaE69117657f1f10C2aaa9C8c79dc3E5306f7EC': {
      logoURI:
        'https://pbs.twimg.com/profile_images/1682780086766895105/8iTtqFVH.jpg',
    },
    '0x79A6a56645D11F6d3464AaF422aFb82d462177B7': {
      logoURI: 'https://i.imgur.com/5NdrSSy.png',
    },
    '0x43F9a13675e352154f745d6402E853FECC388aA5': {
      logoURI:
        'https://cdn.jsdelivr.net/gh/unified-defi/equalizer-tokens@main/fantom/tokens/128x128/0x43f9a13675e352154f745d6402e853fecc388aa5.png',
    },
    '0x2f733095b80a04b38b0d10cc884524a3d09b836a': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/USDCe.svg',
    },
    '0x1D631Adc479309aA073949E0D67973555BBBDcd0': {
      logoURI:
        'https://uce6e5fe9c177db24af91933739b.previews.dropboxusercontent.com/p/thumb/ACMOSvZfaLBi-3D39-kQ8NjskZMzh-O6sq11m8fwst5kmZ6iZP2_ygAIs2MrmkgSjVs-UXNVQE3uNC3no0ycfoZmKUJsho6LospnirH-2dAeq4iPg9ll_HPBzZVatW8Czg7kWCZyJGq-0cfVmhSsqWBEyx-xAxBt7_hraG0y9t9ZR4HcMnaWEo05eEwt2plRQaE0me50c7FADCqZXh8lL3UHewXGkjXuOHaSaq7xNcfCoDoB9FHl9hocJur6pEEqpZ6jaEevuYDuHuU4vc5eB_83yMwDZvfnGysdoaZ72vua0sq4QwiVWlSaXD_fPiMP1cUk50_01H6VY8A2dCSHV7_GKEDXRReZpMvRMul663h8V4oaSjrHxSfeZFiT1xRobC4/p.jpeg',
    },
    '0x07cc4ce4537c209f83d83f856f142e0d0674fd75': {
      logoURI: 'https://spiritswap.finance/images/tokens/$EMRLD.png',
    },
    '0x5Be1789a6928f8659305BF86aD3054530501f424': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/memenatis.png',
    },
    '0x0cE12ae7c899eBF2bcDa7AA570C5af98b6688C95': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x0ce12ae7c899ebf2bcda7aa570c5af98b6688c95.png?size=lg&key=badff6',
    },
    '0x1eb1b381d1473413E430D8CdB91b36208CDE200b': {
      logoURI:
        'https://static.wixstatic.com/media/c7bf16_e769d4fbfdd64beb95c94854ee34b2d8~mv2.png',
    },
    '0xB8a32897016C1B2ee0797090162eAFe58f032795': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0xb8a32897016c1b2ee0797090162eafe58f032795.png?key=a473b3',
    },
    '0x2acF406155902919009f8256afC034A8247A1911': {
      logoURI:
        'https://github.com/fantomindia/FantomKings/blob/main/FKINGS_final.png?raw=true',
    },
  },
  [Network.Sepolia]: {
    '0xb19382073c7a0addbb56ac6af1808fa49e377b75': {
      extensions: {
        coingeckoId: 'balancer',
      },
    },
    '0xb77eb1a70a96fdaaeb31db1b42f2b8b5846b2613': {
      extensions: {
        coingeckoId: 'dai',
      },
    },
    '0x7b79995e5f793a07bc00c21412e50ecae098e7f9': {
      extensions: {
        coingeckoId: 'weth',
      },
    },
    '0x80d6d3946ed8a1da4e226aa21ccddc32bd127d1a': {
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0x6bf294b80c7d8dc72dee762af5d01260b756a051': {
      extensions: {
        coingeckoId: 'tether',
      },
    },
    '0x23bad11f1543503cb1fb5dad05fdaf93f42d30f3': {
      extensions: {
        coingeckoId: 'stasis-eurs',
      },
    },
    '0x0f409e839a6a790aecb737e4436293be11717f95': {
      extensions: {
        coingeckoId: 'beethoven-x',
      },
    },
    '0xc3745bce4b5d0977dc874832bc99108d416dce8f': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
  },
  [Network.Avalanche]: {
    '0xc8E7fB72B53D08C4f95b93b390ed3f132d03f2D5': {
      decimals: 18,
      symbol: 'SQRCAT',
      name: 'SQRCAT',
      logoURI:
        'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xc8E7fB72B53D08C4f95b93b390ed3f132d03f2D5/logo.png',
    },
  },
}
