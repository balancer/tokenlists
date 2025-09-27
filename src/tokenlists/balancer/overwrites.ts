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
    '0xf073bAC22DAb7FaF4a3Dd6c6189a70D54110525C': {
      decimals: 18,
      symbol: 'inETH',
      name: 'InceptionLRT restaked ETH',
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
    '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9': {
      logoURI:
        'https://assets.coingecko.com/coins/images/12645/standard/aave-token-round.png?1720472354',
    },
    '0x41FDbea2E52790c0a1Dc374F07b628741f2E062D': {
      name: 'Gyroscope ECLP sdeUSD/deUSD',
      symbol: 'ECLP-sdeUSD-deUSD',
    },
    '0x848107491E029AFDe0AC543779c7790382f15929': {
      symbol: 'waCrvUSD',
    },
    '0xDBf5E36569798D1E39eE9d7B1c61A7409a74F23A': {
      symbol: 'waLUSD',
    },
    '0x5C5b196aBE0d54485975D1Ec29617D42D9198326': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x8236a87084f8B84306f72007F36F2618A5634494': {
      extensions: {
        coingeckoId: 'lombard-staked-btc',
      },
    },
    '0xb51EDdDD8c47856D81C8681EA71404Cec93E92c6': {
      decimals: 6,
      symbol: 'Aave Core pyUSD',
      name: 'Aave Core pyUSD',
    },
    '0xC71Ea051a5F82c67ADcF634c36FFE6334793D24C': {
      decimals: 18,
      symbol: 'Aave Prime GHO',
      name: 'Aave Prime GHO',
    },
    '0xFa2B947eEc368f42195f24F36d2aF29f7c24CeC2': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xfa2b947eec368f42195f24f36d2af29f7c24cec2.png',
    },
    '0x6A1792a91C08e9f0bFe7a990871B786643237f0F': {
      decimals: 18,
      symbol: 'aRLUSD',
    },
    '0x9B3a8f7CEC208e247d97dEE13313690977e24459': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0x0d45b129dc868963025Db79A9074EA9c9e32Cae4': {
      name: 'Staked USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/sUSDp.svg',
    },
    '0x6eaf19b2fc24552925db245f9ff613157a7dbb4c': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6eaf19b2fc24552925db245f9ff613157a7dbb4c_1.png',
    },
    '0x97ccc1c046d067ab945d3cf3cc6920d3b1e54c88': {
      extensions: {
        coingeckoId: null,
      },
    },
  },
  [Network.HyperEVM]: {
    '0x5555555555555555555555555555555555555555': {
      extensions: {
        coingeckoId: 'wrapped-hype',
      },
    },
    '0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb': {
      extensions: {
        coingeckoId: 'usdt0',
      },
    },
    '0xBe6727B535545C67d5cAa73dEa54865B92CF7907': {
      extensions: {
        coingeckoId: 'unit-ethereum',
      },
    },
    '0x02c6a2fA58cC01A18B8D9E00eA48d65E4dF26c70': {
      extensions: {
        coingeckoId: 'felix-feusd',
      },
    },
    '0x0a3d8466F5dE586FA5F6DE117301e2f90bCC5c48': {
      extensions: {
        coingeckoId: 'resolv-rlp',
      },
    },
    '0xBE65F0F410A72BeC163dC65d46c83699e957D588': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0x9B3a8f7CEC208e247d97dEE13313690977e24459': {
      name: 'Staked USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/sUSDp.svg',
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
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270': {
      symbol: 'wPOL',
      name: 'Wrapped Polygon Ecosystem Token',
    },
    '0x0000000000000000000000000000000000001010': {
      symbol: 'POL',
      name: 'Polygon Ecosystem Token',
    },
    '0x87A1fdc4C726c459f597282be639a045062c0E46': {
      symbol: 'waUSDT',
    },
    '0x2dCa80061632f3F87c9cA28364d1d0c30cD79a19': {
      symbol: 'waUSDCn',
    },
    '0xc63529297dE076eB15fcbE873AE9136E446cFbB9': {
      extensions: {
        coingeckoId: 'gyroscope',
      },
    },
    '0x1250304F66404cd153fA39388DDCDAec7E0f1707': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
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
    '0xD9FBA68D89178e3538e708939332c79efC540179': {
      symbol: 'waGHO',
    },
    '0x89AEc2023f89E26Dbb7eaa7a98fe3996f9d112A8': {
      symbol: 'waFRAX',
    },
    '0x7CFaDFD5645B50bE87d546f42699d863648251ad': {
      symbol: 'waUSDCn',
    },
    '0xb165a74407fE1e519d6bCbDeC1Ed3202B35a4140': {
      symbol: 'waUSDT',
    },
    '0xcF6C2bb97a8978321C9e207afE8A2037fa9be45C': {
      extensions: {
        coingeckoId: 'dinero-apxeth',
      },
    },
    '0xc63529297dE076eB15fcbE873AE9136E446cFbB9': {
      extensions: {
        coingeckoId: 'gyroscope',
      },
    },
    '0x76A9A0062ec6712b99B4f63bD2b4270185759dd5': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0x6eaf19b2fc24552925db245f9ff613157a7dbb4c': {
      extensions: {
        coingeckoId: 'staked-stream-usd',
      },
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6eaf19b2fc24552925db245f9ff613157a7dbb4c_42161.png',
    },
    '0x03569cc076654f82679c4ba2124d64774781b01d': {
      extensions: {
        coingeckoId: 'liquity-bold',
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
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x3e9cBFfd270AE67aBB09D28988e7e785498c7373.png',
    },
    '0xc83c23DBA4a008d7Df46cd50Ad144ae856b6B1Be': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xc83c23DBA4a008d7Df46cd50Ad144ae856b6B1Be.png',
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
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1509706a6c66CA549ff0cB464de88231DDBe213B.png',
    },
    '0xb45ad160634c528cc3d2926d9807104fa3157305': {
      extensions: {
        coingeckoId: null,
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
    '0x5A7a183B6B44Dc4EC2E3d2eF43F98C5152b1d76d': {
      logoURI:
        'https://optimistic.etherscan.io/token/images/inceptionlrtv2_32.png',
      extensions: {
        coingeckId: 'genesislrt-restaked-eth',
      },
    },
    '0xd08C3F25862077056cb1b710937576Af899a4959': {
      logoURI: 'https://optimistic.etherscan.io/token/images/insteth_32.png',
      extensions: {
        coingeckId: 'inception-restaked-steth',
      },
    },
    '0x676f784d19c7f1ac6c6beaeaac78b02a73427852': {
      name: 'Optimism Prime',
      symbol: 'OPP',
      logoURI: 'https://gitlab.com/optimism-prime/logos/-/raw/main/OPP.png',
    },
    '0xc70134c6858f3fe09d051f05dcdda215ace5c153': {
      name: 'OPP Impermax Borrowable OPP-ETH Vault',
      symbol: 'imxB (OPP-ETH)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OPP-OPP-ETH.png',
    },
    '0x1d61313ce48Fa3C60DF3a4B567378B954fE6f9A6': {
      name: 'OPP Impermax Borrowable OPP-opxVELO Vault',
      symbol: 'imxB (OPP-opxVELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OPP-OPP-opxVELO.png',
    },
    '0x035c93db04E5aAea54E6cd0261C492a3e0638b37': {
      symbol: 'waUSDT',
    },
    '0x4DD03dfD36548C840B563745e3FBeC320F37BA7e': {
      symbol: 'waUSDCn',
    },
    '0x9e0b29619dbb2fa7914efa8f3a9302ab9f5025af': {
      name: 'ETH Impermax Borrowable ETH-VELO Vault',
      symbol: 'imxB (ETH on ETH-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-ETH-VELO-ETH.png',
    },
    '0xdf413da4bc8e01e5a2d8699e2f8b73fbc011c0bc': {
      name: 'VELO Impermax Borrowable ETH-VELO Vault',
      symbol: 'imxB (VELO on ETH-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-ETH-VELO-VELO.png',
    },
    '0x0fac6bbfc6d56e1b7abeb58fd437017603ed731f': {
      name: 'OP Impermax Borrowable OP-VELO Vault',
      symbol: 'imxB (OP on OP-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OP-VELO-OP.png',
    },
    '0xd2ae97aad2e0be8a8c583c703d3ad777471c0464': {
      name: 'VELO Impermax Borrowable OP-VELO Vault',
      symbol: 'imxB (VELO on OP-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-OP-VELO-VELO.png',
    },
    '0xbdc2ad83ba9f27cd97b58bd05908cb6939f8d789': {
      name: 'USDC Impermax Borrowable USDC-VELO Vault',
      symbol: 'imxB (USDC on USDC-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-USDC-VELO-USDC.png',
    },
    '0x1f157e15cfaee06b6f8f646e3f4ad1cc7c1739bc': {
      name: 'VELO Impermax Borrowable USDC-VELO Vault',
      symbol: 'imxB (VELO on USDC-VELO)',
      logoURI:
        'https://gitlab.com/optimism-prime/logos/-/raw/main/imxB-USDC-VELO-VELO.png',
    },
    '0x298B9B95708152ff6968aafd889c6586e9169f1D': {
      logoURI:
        'https://optimistic.etherscan.io/token/images/Synthetix_sBTC_32.png',
    },
    '0xFBc4198702E81aE77c06D58f81b629BDf36f0a71': {
      logoURI:
        'https://optimistic.etherscan.io/token/images/synthetixeuro_32.png',
    },
    '0x41B334E9F2C0ED1f30fD7c351874a6071C53a78E': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xd4fa2d31b7968e448877f69a96de69f5de8cd23e.png',
    },
    '0x927CfF131fD5B43FC992D071929b2c095d6E4b70': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x7bc3485026ac48b6cf9baf0a377477fff5703af8.png',
    },
    '0x464b808c2C7E04b07e860fDF7a91870620246148': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x0bfc9d54fc184518a81162f8fb99c2eaca081202.png',
    },
    '0x3ec3849c33291a9ef4c5db86de593eb4a37fde45': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/sfrxETH.png',
      extensions: {
        coingeckoId: 'staked-frax-ether',
      },
    },
    '0x484c2d6e3cdd945a8b2df735e079178c1036578c': {
      name: 'Staked Frax Ether - Deprecated Frax Ferry',
    },
    '0x5bff88ca1442c2496f7e475e9e7786383bc070c0': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/sfrxusd.png',
      extensions: {
        coingeckoId: 'staked-frax-usd',
      },
    },
    '0x8e6a81b9d541A0CeA090818B62C4B2DE7f2A2Cf7': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/rETH-aave-boosted.png',
    },
    '0xbaF95bB30CDab3d5b7a11B67EDeF5631bD62be86': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/wstETH-aave-boosted.png',
    },
    '0x64445f0aecc51e94ad52d8ac56b7190e764e561a': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/FRAX.png',
      extensions: {
        coingeckoId: 'frax-share',
      },
    },
    '0x90337e484B1Cb02132fc150d3Afa262147348545': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
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
    '0xf0E7eC247b918311afa054E0AEdb99d74c31b809': {
      symbol: 'waUSDCn',
    },
    '0xfdA94F056346d2320d4B5E468D6Ad099b2277746': {
      logoURI:
        'https://assets.coingecko.com/coins/images/15044/large/stakewise200.png?1619520721',
    },
    '0xc63529297dE076eB15fcbE873AE9136E446cFbB9': {
      extensions: {
        coingeckoId: 'gyroscope',
      },
    },
    '0x9eE1963f05553eF838604Dd39403be21ceF26AA4': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73': {
      extensions: {
        coingeckoId: 'gho',
      },
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
    '0xc63529297dE076eB15fcbE873AE9136E446cFbB9': {
      extensions: {
        coingeckoId: 'gyroscope',
      },
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
    '0xecAc9C5F704e954931349Da37F60E39f515c11c1': {
      extensions: {
        coingeckoId: 'lombard-staked-btc',
      },
    },
    '0x35e5db674d8e93a03d814fa0ada70731efe8a4b9': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x35e5db674d8e93a03d814fa0ada70731efe8a4b9.svg',
    },
    '0xF6BD14Bc7D980122aa2E70dFe2d7CF926709A0F4': {
      extensions: {
        coingeckoId: 'parifi',
      },
    },
    '0x994ac01750047B9d35431a7Ae4Ed312ee955E030': {
      extensions: {
        coingeckoId: 'optimism',
      },
    },
    '0x76A9A0062ec6712b99B4f63bD2b4270185759dd5': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0x472eD57b376fE400259FB28e5C46eB53f0E3e7E7': {
      name: 'Staked USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/sUSDp.svg',
    },
    '0x7788A3538C5fc7F9c7C8A74EAC4c898fC8d87d92': {
      extensions: {
        coingeckoId: 'usdx-money-staked-usdx',
      },
    },
    '0xf3527ef8dE265eAa3716FB312c12847bFBA66Cef': {
      extensions: {
        coingeckoId: 'usdx-money-usdx',
      },
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
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x91a40C733c97a6e1BF876EaF9ed8c08102eB491f.png',
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
    '0xE5586582E1a60E302a53e73E4FaDccAF868b459a': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xE5586582E1a60E302a53e73E4FaDccAF868b459a.png',
    },
    '0xbf4906762C38F50bC7Be0A11BB452C944f6C72E1': {
      logoURI:
        'https://app.fbomb.finance/images/tokens/0xbf4906762C38F50bC7Be0A11BB452C944f6C72E1.png',
    },
    '0xc5713B6a0F26bf0fdC1c52B90cd184D950be515C': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xc5713B6a0F26bf0fdC1c52B90cd184D950be515C.png',
    },
    '0xF04A45b429eB5930a85884141C530147Db0f609E': {
      logoURI:
        'https://valhalla-dao.com/wp-content/uploads/2023/02/logo1-1.png',
    },
    '0x4f76664105ba7E35dD4904eC70F2042fc17563d9': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4f76664105ba7E35dD4904eC70F2042fc17563d9.png',
    },
    '0x454d4BaE7c2adab588d837aFF4Db16Db19d46A33': {
      name: 'Good Morning FTM',
      logoURI: 'https://i.ibb.co/12RsJ9g/GMFTMTOKENfuneral.png',
    },
    '0x08d70A47D3f28BbF755ae050a783844b40ae5761': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x08d70A47D3f28BbF755ae050a783844b40ae5761.png',
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
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xbF07093ccd6adFC3dEB259C557b61E94c1F66945.png',
    },
    '0xcdE5a11a4ACB4eE4c805352Cec57E236bdBC3837': {
      symbol: 'BPT-BEETS-FTM ',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xcdE5a11a4ACB4eE4c805352Cec57E236bdBC3837.png',
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
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xfcef8a994209d6916EB2C86cDD2AFD60Aa6F54b1.png',
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
    '0x1D631Adc479309aA073949E0D67973555BBBDcd0': {
      logoURI:
        'https://uce6e5fe9c177db24af91933739b.previews.dropboxusercontent.com/p/thumb/ACMOSvZfaLBi-3D39-kQ8NjskZMzh-O6sq11m8fwst5kmZ6iZP2_ygAIs2MrmkgSjVs-UXNVQE3uNC3no0ycfoZmKUJsho6LospnirH-2dAeq4iPg9ll_HPBzZVatW8Czg7kWCZyJGq-0cfVmhSsqWBEyx-xAxBt7_hraG0y9t9ZR4HcMnaWEo05eEwt2plRQaE0me50c7FADCqZXh8lL3UHewXGkjXuOHaSaq7xNcfCoDoB9FHl9hocJur6pEEqpZ6jaEevuYDuHuU4vc5eB_83yMwDZvfnGysdoaZ72vua0sq4QwiVWlSaXD_fPiMP1cUk50_01H6VY8A2dCSHV7_GKEDXRReZpMvRMul663h8V4oaSjrHxSfeZFiT1xRobC4/p.jpeg',
    },
    '0x07cc4ce4537c209f83d83f856f142e0d0674fd75': {
      logoURI: 'https://spiritswap.finance/images/tokens/$EMRLD.png',
    },
    '0x5Be1789a6928f8659305BF86aD3054530501f424': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x5Be1789a6928f8659305BF86aD3054530501f424.png',
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
    '0x677079211f6c82e34096153e6cea0d2c26b4b7dc': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x677079211f6c82e34096153e6cea0d2c26b4b7dc.png',
    },
    '0x3ea22B3bb815348120cFFdd84c3701311F2eDb72': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x3ea22b3bb815348120cffdd84c3701311f2edb72.png',
    },
    '0xd89cc0d2A28a769eADeF50fFf74EBC07405DB9Fc': {
      logoURI: 'https://ftmscan.com/token/images/elyseos2_32.png',
    },
    '0x0DEb5dAf6662f87366Fb0E9fbe60a866Ff46d486': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x0deb5daf6662f87366fb0e9fbe60a866ff46d486.png?size=lg&key=165a8c',
    },
    '0xfA94E37eBcf28de44A6f8088812ce33f16FADb7c': {
      logoURI: 'https://beerftm.com/images/CARTELFTMLOGO.png',
    },
    '0x90cE4aBdf3eC9614ab3AB41B2D20B716fdC50d49': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x90ce4abdf3ec9614ab3ab41b2d20b716fdc50d49.png?size=lg&key=684221',
    },
    '0xd1f9425518C5CfeE1b89013A4d0fe3094984fCe5': {
      logoURI: 'https://beerftm.com/images/PUBGIRLS-LOGO.gif',
    },
    '0x431516E478d73CFAB034229c4D7a94A2CBF5787F': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x431516e478d73cfab034229c4d7a94a2cbf5787f.png?size=lg&key=6238af',
    },
    '0x73c93919cdA13b0FAf01a9188d9eb8aA633732Ad': {
      logoURI: 'https://beerftm.com/LOGO1+TEXT.png',
    },
    '0xd978E0638b640d5050812EC5F90fc9a54D27D950': {
      logoURI: 'https://beerftm.com/OPT2.png',
    },
    '0xc18827872E8CC49f182D25B9a2eb530C9Df54c34': {
      logoURI: 'https://beerftm.com/HOB%20LOGO.png',
    },
    '0x94Ba6241BC7E6F7F24a5B95fE6726B31C74881aB': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x94ba6241bc7e6f7f24a5b95fe6726b31c74881ab.png?key=f4da13',
    },
    '0x59e758cC4A863734E144CF3070210366daBC2E58': {
      logoURI: 'https://i.ibb.co/0s08MzL/SHILLY-LOGO-CIRCLE-BIG-2.png',
    },
    '0xe6cc4D855B4fD4A9D02F46B9adae4C5EfB1764B5': {
      logoURI:
        'https://bafybeiehzznjxownjllrbjij7rliuyiqn6nlfaer7izctgjk5la3ldhpq4.ipfs.dweb.link',
    },
    '0xB2a909b8bCce9B30BbC9d4c748fD897d6AD9c285': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0xb2a909b8bcce9b30bbc9d4c748fd897d6ad9c285.png?size=lg&key=4b97c8',
    },
    '0x1aeC146acF835b30b3745fD7a02B1c5D4A9d85eF': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x1aec146acf835b30b3745fd7a02b1c5d4a9d85ef.png?size=lg&key=99f24a',
    },
    '0x5d9EaFC54567F34164A269Ba6C099068df6ef651': {
      logoURI:
        'https://cdn.jsdelivr.net/gh/unified-defi/equalizer-tokens@latest/fantom/tokens/128x128/0x5d9eafc54567f34164a269ba6c099068df6ef651.png',
    },
    '0xA556f91530b4e1f59964d5891ee1c50517dC01cd': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0xa556f91530b4e1f59964d5891ee1c50517dc01cd.png?size=lg&key=0cfccd',
    },
    '0x24626638Ca7b8315c755F4a7337542f10582C805': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x24626638ca7b8315c755f4a7337542f10582c805.png?size=lg&key=0c4c55',
    },
    '0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9': {
      extensions: {
        coingeckoId: 'liquiddriver',
      },
    },
  },
  [Network.Sepolia]: {
    '0xb19382073c7A0aDdbb56Ac6AF1808Fa49e377B75': {
      extensions: {
        coingeckoId: 'balancer',
      },
    },
    '0xB77EB1A70A96fDAAeB31DB1b42F2b8b5846b2613': {
      extensions: {
        coingeckoId: 'dai',
      },
    },
    '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9': {
      extensions: {
        coingeckoId: 'weth',
      },
    },
    '0x80D6d3946ed8A1Da4E226aa21CCdDc32bd127d1A': {
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0x6bF294B80C7d8Dc72DEE762af5d01260B756A051': {
      extensions: {
        coingeckoId: 'tether',
      },
    },
    '0x23BAd11F1543503CB1FB5dAd05fdAF93F42d30F3': {
      extensions: {
        coingeckoId: 'stasis-eurs',
      },
    },
    '0x0f409E839a6A790aecB737E4436293Be11717f95': {
      extensions: {
        coingeckoId: 'beethoven-x',
      },
    },
    '0xC3745bcE4b5D0977dC874832BC99108D416dCe8f': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
    '0x29f2d40b0605204364af54ec677bd022da425d03': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
    '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357': {
      name: 'DAI (AAVE Faucet)',
      symbol: 'dai-aave',
      extensions: {
        coingeckoId: 'dai',
      },
    },
    '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8': {
      name: 'USDC (AAVE Faucet)',
      symbol: 'usdc-aave',
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0': {
      name: 'USDT (AAVE Faucet)',
      symbol: 'usdt-aave',
      extensions: {
        coingeckoId: 'tether',
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
    '0xA3D68b74bF0528fdD07263c60d6488749044914b': {
      extensions: {
        coingeckoId: 'wrapped-eeth',
      },
    },
    '0x9eE1963f05553eF838604Dd39403be21ceF26AA4': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0x9d92c21205383651610f90722131655a5b8ed3e0': {
      name: 'Staked USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/sUSDp.svg',
    },
    '0x94f9bb5c972285728dcee7eaece48bec2ff341ce': {
      extensions: {
        coingeckoId: 'staked-stream-usd',
      },
    },
    '0x6eaf19b2fc24552925db245f9ff613157a7dbb4c': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6eaf19b2fc24552925db245f9ff613157a7dbb4c_43114.png',
    },
  },
  [Network.Fraxtal]: {
    '0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2': {
      extensions: {
        coingeckoId: 'ethena-staked-usde',
      },
    },
    '0x09eAdcBAa812A4C076c3a6cDe765DC4a22E0d775': {
      extensions: {
        coingeckoId: 'savings-dai',
      },
    },
    '0xFC00000000000000000000000000000000000005': {
      extensions: {
        coingeckoId: 'staked-frax-ether',
      },
    },
    '0x2FC7447F6cF71f9aa9E7FF8814B37E55b268Ec91': {
      extensions: {
        coingeckoId: 'balancer',
      },
    },
    '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34': {
      extensions: {
        coingeckoId: 'ethena-usde',
      },
    },
    '0xFc00000000000000000000000000000000000001': {
      name: 'Frax USD',
      symbol: 'frxUSD',
      extensions: {
        coingeckoId: 'frax-usd',
      },
    },
    '0xfc00000000000000000000000000000000000008': {
      name: 'Staked Frax USD',
      symbol: 'sfrxUSD',
      extensions: {
        coingeckoId: 'staked-frax-usd',
      },
    },
  },
  [Network.Mode]: {
    '0xD08a2917653d4E460893203471f0000826fb4034': {
      extensions: {
        coingeckoId: 'balancer',
      },
    },
    '0xd0d1b59ca62ce194e882455fd36632d6277b192a': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
    '0xe3c0ff176ef92fc225096c6d1788ccb818808b35': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
    '0x964dd444e3192F636322229080A576077B06FbA3': {
      extensions: {
        coingeckoId: 'lombard-staked-btc',
      },
    },
  },
  [Network.Sonic]: {
    '0xe6cc4D855B4fD4A9D02F46B9adae4C5EfB1764B5': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe6cc4D855B4fD4A9D02F46B9adae4C5EfB1764B5.png',
    },
    '0xe5da20f15420ad15de0fa650600afc998bbe3955': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe5da20f15420ad15de0fa650600afc998bbe3955.png',
      extensions: {
        coingeckoId: 'beets-staked-sonic',
      },
    },
    '0x2D0E0814E62D80056181F5cd932274405966e4f0': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x2D0E0814E62D80056181F5cd932274405966e4f0.png',
      extensions: {
        coingeckoId: 'beets',
      },
    },
    '0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38.png',
      extensions: {
        coingeckoId: 'sonic-3',
      },
    },
    '0x50c42deacd8fc9773493ed674b675be577f2634b': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x4200000000000000000000000000000000000006.png',
    },
    '0x29219dd400f2Bf60E5a23d13Be72B486D4038894': {
      logoURI:
        'https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
      name: 'USDC',
      symbol: 'USDC',
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0x541FD749419CA806a8bc7da8ac23D346f2dF8B77': {
      logoURI:
        'https://assets.coingecko.com/coins/images/36800/standard/solvBTC.png?1719810684',
      extensions: {
        coingeckoId: 'solv-btc',
      },
    },
    '0xCC0966D8418d412c599A6421b760a847eB169A8c': {
      logoURI:
        'https://assets.coingecko.com/coins/images/39384/standard/unnamed.png?1721961640',
      extensions: {
        coingeckoId: 'solv-protocol-solvbtc-bbn',
      },
    },
    '0x342781fd3d3F73bdB54b2DEDd925f2ad81b48590': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x342781fd3d3F73bdB54b2DEDd925f2ad81b48590.png',
    },
    '0x93cd403693Da40d27188714a872943F717E3c543': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x93cd403693Da40d27188714a872943F717E3c543.png',
    },
    '0xB5A10bd15aF95381D830f71E85328F2d1d823de7': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xB5A10bd15aF95381D830f71E85328F2d1d823de7.png',
    },
    '0x71D634647a1aa323C1A0E6d9548dDaA6Eb750E6e': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x71D634647a1aa323C1A0E6d9548dDaA6Eb750E6e.png',
    },
    '0x74ebDC16D36D1820BA014c2F273Bd03796Ad30C3': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x74ebDC16D36D1820BA014c2F273Bd03796Ad30C3.png',
    },
    '0x2d10a2e2D680564a942e98EE43e35553db990807': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x2d10a2e2D680564a942e98EE43e35553db990807.png',
    },
    '0xaA2549E4B687a338C111d5d1feA4754d51E55471': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xaA2549E4B687a338C111d5d1feA4754d51E55471.png',
    },
    '0xE17Be928A08D66156eC242A68c4929B07cF14CCC': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xE17Be928A08D66156eC242A68c4929B07cF14CCC.png',
    },
    '0x99AaC0966ec3F667c85e9FD2dFc6b8f3E2C896B5': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x99AaC0966ec3F667c85e9FD2dFc6b8f3E2C896B5.png',
    },
    '0x3854fD4712eb3A5Aa51c949C29cACE84F7ED2eFC': {
      logoURI: 'https://i.ibb.co/0s08MzL/SHILLY-LOGO-CIRCLE-BIG-2.png',
    },
    '0x17Af1Df44444AB9091622e4Aa66dB5BB34E51aD5': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x17Af1Df44444AB9091622e4Aa66dB5BB34E51aD5.png',
    },
    '0x1E5fe95fB90ac0530F581C617272cd0864626795': {
      name: 'Fantom lzBEETS',
      symbol: 'lzBEETS',
      logoURI:
        'https://assets.coingecko.com/coins/images/19158/standard/beets-icon-large.png?1696518608',
    },
    '0xBC0d0650412EF353D672c0Bbd12eFFF90591B251': {
      logoURI: 'https://i.ibb.co/D7wShRv/Square-Fantom-Starter-Logo.png',
    },
    '0x63A522f6E7D5B96F7aeBB74d2648545E9e14078D': {
      logoURI:
        'https://gateway.pinata.cloud/ipfs/bafkreiaynps4xalkiktny4fpwhk2ziq3xbw7hiq676cijddb3zzflcwdcq',
    },
    '0xBe422DD2F451348d5D0979D8ab25B4c6eAAd1eB2': {
      logoURI: 'https://i.ibb.co/x3DdsbK/Familio.png',
    },
    '0x9fDbC3f8Abc05Fa8f3Ad3C17D2F806c1230c4564': {
      logoURI: 'https://i.ibb.co/Ksp9CcT/Goggles.png',
    },
    '0x50Bc6e1DfF8039A4b967c1BF507ba5eA13fa18B6': {
      logoURI: 'https://i.ibb.co/TmPRQZp/sDOG.png',
    },
    '0x7A08Bf5304094CA4C7b4132Ef62b5EDc4a3478B7': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0xb8a32897016c1b2ee0797090162eafe58f032795.png?key=a473b3',
    },
    '0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE': {
      logoURI: 'https://i.ibb.co/PFw2zkx/scUSD64.png',
    },
    '0x3bcE5CB273F0F148010BbEa2470e7b5df84C7812': {
      logoURI: 'https://i.ibb.co/fMTYnj2/scETH64.png',
    },
    '0xf2968631D02330Dc5E420373f083b7B4F8B24E17': {
      logoURI: 'https://i.ibb.co/qs9X9Xt/Relic.png',
    },
    '0xB2a909b8bCce9B30BbC9d4c748fD897d6AD9c285': {
      logoURI: 'https://i.ibb.co/DMPP0tZ/pizzaratlogo-text-600dpi.png',
    },
    '0xd43b5d6899635e514A00b475eEa04C364979e076': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/fantom/0x1e2ea3f3209d66647f959cf00627107e079b870d.png?size=lg&key=5a19d7',
    },
    '0x9aF092fD69e341a651725f89CC5510a22E40E614': {
      logoURI: 'https://i.ibb.co/FzGjYCR/Blaze.png',
    },
    '0xE51EE9868C1f0d6cd968A8B8C8376Dc2991BFE44': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/sonic/0xe51ee9868c1f0d6cd968a8b8c8376dc2991bfe44.png?size=lg&key=50f8b4',
      extensions: {
        coingeckoId: 'paint-swap',
      },
    },
    '0x10ac2F9DaE6539E77e372aDB14B1BF8fBD16b3e8': {
      logoURI: 'https://sonicscan.org/token/images/mabeets_32.png',
    },
    '0xe715cba7b5ccb33790cebff1436809d36cb17e57': {
      logoURI:
        'https://assets.coingecko.com/coins/images/26045/standard/euro.png?1696525125',
      extensions: {
        coingeckoId: null,
      },
    },
    '0x6fB9897896Fe5D05025Eb43306675727887D0B7c': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/sonic/0x6fb9897896fe5d05025eb43306675727887d0b7c.png?size=lg&key=69e35d',
    },
    '0xC046dCb16592FBb3F9fA0C629b8D93090dD4cB76': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/sonic/0xc046dcb16592fbb3f9fa0c629b8d93090dd4cb76.png?size=lg&key=872bae',
    },
    '0x05e31a691405d06708A355C029599c12d5da8b28': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/sonic/0x05e31a691405d06708a355c029599c12d5da8b28.png?size=lg&key=f7ac24',
    },
    '0xf1c9b8171bf3902554e791010ccbcd6bacba6efd': {
      logoURI: 'https://i.ibb.co/4N62vMk/BEARZWIFGUNZ180042069.png',
    },
    '0xb161Fe49dEB1BDa8e3A4a484D5CcD927a35A7DDe': {
      logoURI: 'https://i.ibb.co/64mycQm/SURV.png',
    },
    '0x690d956D97d3EEe18AB68ED1A28a89d531734F3d': {
      logoURI: 'https://i.ibb.co/BTm5hX9/Moist.jpg',
    },
    '0x7F144F8691CbA3d2EfD8e5bcf042f9303EE31a46': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x7F144F8691CbA3d2EfD8e5bcf042f9303EE31a46.png',
    },
    '0x0a54364631Ea37813a63edb3bBa1C46f8d8304B2': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/sonic/0x0a54364631ea37813a63edb3bba1c46f8d8304b2.png?size=lg&key=761e2c',
    },
    '0x486B6Fa0419b33a0c7A6e4698c231D7E2f2D5299': {
      logoURI: 'https://sonicscan.org/token/images/moonbaysonic_32.png',
    },
    '0xDE55B113A27Cc0c5893CAa6Ee1C020b6B46650C0': {
      logoURI:
        'https://assets.coingecko.com/coins/images/18778/standard/Black_Background_200x200.png?1696518242',
    },
    '0x0e65f5a7cb56641e31bc5c9d53388db7ac7eacae': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x0e65f5a7cb56641e31bc5c9d53388db7ac7eacae.png',
    },
    '0x19008165514Ec7622b34924c755Dc7d116F84840': {
      logoURI: 'https://i.ibb.co/S60DvQm/Shill.jpg',
    },
    '0x35be05dF4e074606c77d78968ec5FBC9cCd4348B': {
      logoURI:
        'https://pbs.twimg.com/profile_images/1734720923448537088/6WMuxreE_400x400.jpg',
    },
    '0xCf3FE6eDFeE9c7fdf7d53DC58f4EFe66Fe110981': {
      logoURI:
        'https://static.wixstatic.com/media/c7bf16_e769d4fbfdd64beb95c94854ee34b2d8~mv2.png',
    },
    '0xd31e89ffb929b38ba60d1c7dbeb68c7712eaab0a': {
      symbol: 'AvalonSolvBTC',
      name: 'Static Avalon solvBTC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xd31e89ffb929b38ba60d1c7dbeb68c7712eaab0a.png',
    },
    '0xa28d4dbcc90c849e3249d642f356d85296a12954': {
      symbol: 'AvalonSolvBTC.bbn',
      name: 'Static Avalon solvBTC.bbn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xa28d4dbcc90c849e3249d642f356d85296a12954.png',
    },
    '0x87178fe8698c7eda8aa207083c3d66aea569ab98': {
      symbol: 'SiloSolvBTC',
      name: 'Silo wrapped solvBTC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x87178fe8698c7eda8aa207083c3d66aea569ab98.png',
    },
    '0x52fc9e0a68b6a4c9b57b9d1d99fb71449a99dcd8': {
      symbol: 'SiloSolvBTC.bbn',
      name: 'Silo wrapped solvBTC.bbn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x52fc9e0a68b6a4c9b57b9d1d99fb71449a99dcd8.png',
    },
    '0x7870ddfd5aca4e977b2287e9a212bcbe8fc4135a': {
      symbol: 'BeefyUSDC',
      name: 'Beefy Wrapped SiloV2 USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x7870ddfd5aca4e977b2287e9a212bcbe8fc4135a.png',
    },
    '0x53f753E4B17F4075D6fa2c6909033d224b81e698': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x53f753E4B17F4075D6fa2c6909033d224b81e698.png',
      extensions: {
        coingeckoId: 'silo-finance',
      },
    },
    '0x284d81e48fbc782aa9186a03a226690aea5cbe0e': {
      logoURI:
        'https://assets.coingecko.com/coins/images/53797/standard/IMG_7045.jpeg?1737477230',
      extensions: {
        coingeckoId: 'atoll-eth',
      },
    },
    '0x39838b880BA948C49aaB7253f61Ce1e00C30c014': {
      logoURI: 'https://maxflowo2.com/img/image.png',
    },
    '0x44E23B1F3f4511b3a7e81077Fd9F2858dF1B7579': {
      logoURI:
        'https://assets.coingecko.com/coins/images/29314/standard/mclb.png?1696528265',
    },
    '0x38628cb4cc74cbDFB6dDD877B17c1F60fCAE7C2C': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x38628cb4cc74cbDFB6dDD877B17c1F60fCAE7C2C.png',
    },
    '0xF97d438BC03aD0F75B83ce5714c9619880B305bc': {
      logoURI:
        'https://cdn.jsdelivr.net/gh/unified-defi/equalizer-tokens@latest/sonic/tokens/128x128/0xf97d438bc03ad0f75b83ce5714c9619880b305bc.png',
    },
    '0x0C4E186Eae8aCAA7F7de1315D5AD174BE39Ec987': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/anS.png',
    },
    '0x016C306e103FbF48EC24810D078C65aD13c5f11B': {
      symbol: 'SiloWS',
      name: 'Silo Wrapped Sonic - 25',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x016C306e103FbF48EC24810D078C65aD13c5f11B.png',
    },
    '0xfA85Fe5A8F5560e9039C04f2b0a90dE1415aBD70': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/wanS.png',
    },
    '0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1.png',
    },
    '0x219656F33c58488D09d518BaDF50AA8CdCAcA2Aa': {
      symbol: 'SiloWETH',
      name: 'Silo Wrapped wETH - 26',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x219656F33c58488D09d518BaDF50AA8CdCAcA2Aa.png',
    },
    '0xb1e25689D55734FD3ffFc939c4C3Eb52DFf8A794': {
      logoURI:
        'https://raw.githubusercontent.com/OriginProtocol/origin-website/refs/heads/master/static/img/coins/os-256x256.png',
    },
    '0x6047828dc181963ba44974801ff68e538da5eaf9': {
      logoURI:
        'https://coin-images.coingecko.com/coins/images/31185/large/anyusdt_32.png?1696530013',
      extensions: {
        coingeckoId: 'tether',
      },
    },
    '0x9bCeA390ff97e0d3362bf726820776a4dF8AdD9a': {
      logoURI: 'https://i.ibb.co/tT6FNGGv/Uppies.jpg',
    },
    '0x6c49B18333A1135e9A376560c07E6D1Fd0350EaF': {
      symbol: 'SiloWS',
      name: 'Silo Wrapped Sonic - 28',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6c49B18333A1135e9A376560c07E6D1Fd0350EaF.png',
    },
    '0x5954ce6671d97D24B782920ddCdBB4b1E63aB2De': {
      symbol: 'SiloUSDC',
      name: 'Silo Wrapped USDC - 23',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x5954ce6671d97D24B782920ddCdBB4b1E63aB2De.png',
    },
    '0x9990dE39Ca46151150E392Ca96EB349d0f549166': {
      logoURI: 'https://i.ibb.co/GfRrxSj3/Speed-Logo.jpg',
    },
    '0xf26Ff70573ddc8a90Bd7865AF8d7d70B8Ff019bC': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/sonic/0xf26ff70573ddc8a90bd7865af8d7d70b8ff019bc.png?size=lg&key=5e5b9c',
      extensions: {
        coingeckoId: 'eggs-finance',
      },
    },
    '0xecAc9C5F704e954931349Da37F60E39f515c11c1': {
      logoURI: 'https://sonicscan.org/token/images/lbtc_64.png',
      extensions: {
        coingeckoId: 'lombard-staked-btc',
      },
    },
    '0xBb30e76d9Bb2CC9631F7fC5Eb8e87B5Aff32bFbd': {
      logoURI: 'https://i.ibb.co/F4CXYdL4/scBTC-32.png',
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
    },
    '0x1e2c4fb7ede391d116e6b41cd0608260e8801d59': {
      extensions: {
        coingeckoId: 'backed-cspx-core-s-p-500',
      },
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x1e2c4fb7ede391d116e6b41cd0608260e8801d59.png',
    },
    '0x3419966bc74fa8f951108d15b053bed233974d3d': {
      symbol: 'BeetsFragmentsS1',
      name: 'Beets Gem Fragments - S1',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x3419966bc74fa8f951108d15b053bed233974d3d.png',
    },
    '0x0555e30da8f98308edb960aa94c0db47230d2b9c': {
      extensions: {
        coingeckoId: 'wrapped-bitcoin',
      },
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x0555e30da8f98308edb960aa94c0db47230d2b9c.png',
    },
    '0x80Eede496655FB9047dd39d9f418d5483ED600df': {
      extensions: {
        coingeckoId: 'frax-usd',
      },
      logoURI: 'https://static.frax.com/images/tokens/frxusd.png',
    },
    '0xdA14A41DbdA731F03A94cb722191639DD22b35b2': {
      symbol: 'SiloFrxUSD',
      name: 'Silo Wrapped frxUSD - 37',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/frxUSD_silo.png',
    },
    '0xEdF8b632b537d5993Adb5e2E15882CD791c284cB': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/base/0x74ccbe53f77b08632ce0cb91d3a545bf6b8e0979.png?size=lg&key=9217b4',
    },
    '0x0A94e18bdbCcD048198806d7FF28A1B1D2590724': {
      symbol: 'SiloSCBTC',
      name: 'Silo Wrapped scBTC - 32',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x0A94e18bdbCcD048198806d7FF28A1B1D2590724.png',
    },
    '0xe6605932e4a686534D19005BB9dB0FBA1F101272': {
      symbol: 'SiloScUSD',
      name: 'Silo Wrapped scUSD - 46',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/scUSD-silo.svg',
    },
    '0x24c74B30d1a4261608E84Bf5a618693032681DAc': {
      symbol: 'SiloScETH',
      name: 'Silo Wrapped scETH - 47',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/scETH-silo.png',
    },
    '0x08C320A84a59c6f533e0DcA655cf497594BCa1F9': {
      symbol: 'SiloWETH',
      name: 'Silo Wrapped wETH - 35',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x219656F33c58488D09d518BaDF50AA8CdCAcA2Aa.png',
    },
    '0x42CE2234fd5a26bF161477a996961c4d01F466a3': {
      symbol: 'SiloUSDC',
      name: 'Silo Wrapped USDC - 33',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x5954ce6671d97D24B782920ddCdBB4b1E63aB2De.png',
    },
    '0x90a804D316A06E00755444D56b9eF52e5C4F4D73': {
      symbol: 'ewS',
      name: 'Euler Wrapped wS - 5',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/wS-boosted-Euler.png',
    },
    '0x6832F3090867449c058e1e3088E552E12AB18F9E': {
      symbol: 'estS',
      name: 'Euler Wrapped stS - 5',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/stS-boosted-Euler.png',
    },
    '0x6646248971427B80ce531bdD793e2Eb859347E55': {
      symbol: 'waUSDC',
      name: 'Wrapped Aave Sonic USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xd4fa2d31b7968e448877f69a96de69f5de8cd23e.png',
    },
    '0x18B7B8695165290f2767BC63c36D3dFEa4C0F9bB': {
      symbol: 'wawS',
      name: 'Wrapped Aave Sonic wS',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/a-wS.png',
    },
    '0xe8a41c62bb4d5863c6eadc96792cfe90a1f37c47': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/wstkscETH.png',
    },
    '0x9fb76f7ce5fceaa2c42887ff441d46095e494206': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/wstkscusd.png',
    },
    '0x871A101Dcf22fE4fE37be7B654098c801CBA1c88': {
      logoURI:
        'https://assets.coingecko.com/coins/images/55186/standard/beS.png?1744440042',
    },
    '0x3333b97138D4b086720b5aE8A7844b1345a33333': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/sonic/0x3333b97138d4b086720b5ae8a7844b1345a33333.png?size=lg&key=c2e8a2',
    },
    '0xd229ff67806d6037e6dfc9eeb2f331cb74e8c79e': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xd229ff67806d6037e6dfc9eeb2f331cb74e8c79e.png',
    },
    '0x3333111A391cC08fa51353E9195526A70b333333': {
      logoURI:
        'https://dd.dexscreener.com/ds-data/tokens/sonic/0x3333111a391cc08fa51353e9195526a70b333333.png?size=lg&key=6ad28a',
      extensions: {
        coingeckoId: 'shadow-liquid-staking-token',
      },
    },
    '0x9A08cD5691E009cC72E2A4d8e7F2e6EE14E96d6d': {
      logoURI:
        'https://raw.githubusercontent.com/stabilitydao/.github/main/tokens/sGEM1.png',
    },
    '0xfd28f108e95f4d41daae9dbfff707d677985998e': {
      extensions: {
        coingeckoId: null,
      },
    },
    '0x79bbF4508B1391af3A0F4B30bb5FC4aa9ab0E07C': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x79bbf4508b1391af3a0f4b30bb5fc4aa9ab0e07c.png',
    },
    '0x0e0Ce4D450c705F8a0B6Dd9d5123e3df2787D16B': {
      logoURI:
        'https://raw.githubusercontent.com/RealWagmi/tokenlists/main/logos/146/0x0e0Ce4D450c705F8a0B6Dd9d5123e3df2787D16B/logo.png',
      extensions: {
        coingeckoId: 'wagmi-2',
      },
    },
    '0xd9D6F92Df52716835594Ab41Ea6f3BB994da98b6': {
      logoURI: 'https://i.ibb.co/3mV17Yhj/photo-2025-05-29-10-50-32.jpg',
    },
    '0xF6F87073cF8929C206A77b0694619DC776F89885': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/USDC-varlamore-boosted.png',
    },
    '0xDED4aC8645619334186f28B8798e07ca354CFa0e': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/wS-varlamore-boosted.png',
    },
    '0xb6A23cB29e512Df41876B28D7A848BD831f9c5Ba': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/scUSD-varlamore-boosted.png',
    },
    '0x6202B9f02E30E5e1c62Cc01E4305450E5d83b926': {
      logoURI: 'https://app.streamprotocol.money/assets/usdc-a6e16350.svg',
    },
    '0xb4444468e444f89e1c2cac2f1d3ee7e336cbd1f5': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/rzr.png',
    },
    '0xEEEEEEE6d95E55A468D32FeB5d6648754d10A967': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/USDC-stability-boosted.png',
    },
    '0xccccCCcca9FC69a2b32408730011EdB3205A93A1': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/scUSD-stability-boosted.png',
    },
    '0x53a6aBb52B2F968fA80dF6A894e4f1b1020DA975': {
      extensions: {
        coingeckoId: 'dtrinity-usd',
      },
    },
    '0x592D1e187729C76EfacC6dfFB9355bd7BF47B2a7': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/scUSD-re7-boosted.png',
    },
    '0x9A1BF5365edBB99C2c61CA6D9ffAd0B705ACfc6F': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/dUSD-varlamore-boosted.png',
    },
    '0xE4A4353CD8F008f1a70f1a564535990479E8ceb7': {
      logoURI:
        'https://assets.coingecko.com/coins/images/24558/standard/PAL-Token-dark_%281%29.png?1735661952',
      extensions: {
        coingeckoId: 'paladin',
      },
    },
    '0xe920d1da9a4d59126dc35996ea242d60efca1304': {
      logoURI:
        'https://assets.coingecko.com/coins/images/53307/standard/DERP_TOKEN.png?1736066460',
      extensions: {
        coingeckoId: 'derp-2',
      },
    },
    '0x67a298e5b65db2b4616e05c3b455e017275f53cb': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/lstrzr.png',
    },
    '0xc7990369DA608C2F4903715E3bD22f2970536C29': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/smsusd.png',
    },
    '0x08417cdb7F52a5021bB4eb6E0deAf3f295c3f182': {
      name: 'USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/USDp.svg',
    },
    '0xe8a3DA6f5ed1cf04c58ac7f6A7383641e877517b': {
      name: 'Staked USDp',
      logoURI:
        'https://raw.githubusercontent.com/parallel-protocol/parallel-brand-kit/main/Tokens/USDp/sUSDp.svg',
    },
    '0xe5fb2ed6832def99dde57c0b9d9a56537c89121d': {
      extensions: {
        coingeckoId: 'main-street-usd',
      },
    },
    '0x2286bA4fcbb2eF06C4349fAF6B8970ece593f5DD': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/vs.png',
    },
    '0x92ebF5A1fB4061B45222a6d76ACCF4698bdE4b95': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/scUSD-silo.svg',
    },
    '0xf6bC16B79c469b94Cdd25F3e2334DD4FEE47A581': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x5954ce6671d97D24B782920ddCdBB4b1E63aB2De.png',
    },
    '0x41a5477364BF60d8936b90310FecFDa79593304E': {
      logoURI: 'https://app.dtrinity.org/dloop/icons/tokens/sdusd.svg',
    },
    '0x7c050be1dded733bd44116b60a8a35125ba47459': {
      extensions: {
        coingeckoId: 'wrapped-rseth',
      },
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x87eee96d50fb761ad85b1c982d28a042169d61b1.png',
    },
    '0x8ed344E89527C6cE382fd1E23B4D6D4c2865b6A9': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/ONE.png',
    },
    '0xeB5e9B0ae5bb60274786C747A1A2A798c11271E0': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x0bfc9d54fc184518a81162f8fb99c2eaca081202.png',
    },
    '0x391b3F70E254d582588B27e97E48D1CFcdf0BE7e': {
      name: 'Trevee Silo scUSD',
      symbol: 'Trevee scUSD',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/scUSD-trevee-boosted.png',
    },
    '0xf05a207442f14E446b0e32b12D2043bfc68Cb1C9': {
      extensions: {
        coingeckoId: 'liquity-bold-2',
      },
    },
    '0x602BaeaB9B0DE4a99C457cf1249088932AA04FaC': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/busd.png',
    },
  },
  [Network.Plasma]: {
    '0x6eAf19b2FC24552925dB245F9Ff613157a7dbb4C': {
      extensions: { coingeckoId: 'staked-stream-usd' },
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x6eaf19b2fc24552925db245f9ff613157a7dbb4c_9745.png',
    },
    '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34': {
      extensions: { coingeckoId: 'ethena-usde' },
    },
    '0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2': {
      extensions: { coingeckoId: 'ethena-staked-usde' },
    },
    '0xA3D68b74bF0528fdD07263c60d6488749044914b': {
      extensions: { coingeckoId: 'wrapped-eeth' },
    },
    '0x9895D81bB462A195b4922ED7De0e3ACD007c32CB': {
      extensions: { coingeckoId: 'weth' },
    },
    '0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb': {
      extensions: { coingeckoId: 'usdt0' },
    },
    '0x0A1a1A107E45b7Ced86833863f482BC5f4ed82EF': {
      extensions: { coingeckoId: 'usdai' },
    },
    '0x6100E367285b01F48D07953803A2d8dCA5D19873': {
      extensions: { coingeckoId: 'plasma' },
    },
    '0x0B2b2B2076d95dda7817e785989fE353fe955ef9': {
      extensions: { coingeckoId: 'susdai' },
    },
    '0xe561FE05C39075312Aa9Bc6af79DdaE981461359': {
      extensions: { coingeckoId: 'wrapped-rseth' },
    },
  },
}
