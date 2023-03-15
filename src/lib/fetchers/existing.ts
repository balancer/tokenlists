import { TokenInfo } from '@uniswap/token-lists'
import { Network, PartialTokenInfoMap } from '../../types'
import fs from 'fs'
import { getAddress, isAddress } from 'ethers'
import { overwrites } from '../../overwrites'
import existingTokenlist from '../../../generated/balancer.tokenlist.json'
import { merge, pick } from 'lodash'

const trustWalletNetworkMap: Record<Network, string> = {
  [Network.Mainnet]: 'ethereum',
  [Network.Goerli]: 'ethereum',
  [Network.Polygon]: 'polygon',
  [Network.Arbitrum]: 'ethereum',
  [Network.Optimism]: 'ethereum',
  [Network.Gnosis]: 'xdai',
}

function convertTokenInfoToMap(tokenInfo: TokenInfo[]): PartialTokenInfoMap {
  return tokenInfo.reduce((map: PartialTokenInfoMap, obj) => {
    map[getAddress(obj.address)] = pick(
      obj,
      'address',
      'symbol',
      'decimals',
      'logoURI',
      'chainId'
    )
    return map
  }, {})
}

async function fetchTrustWalletMetadata(
  network: Network
): Promise<PartialTokenInfoMap> {
  try {
    // eslint-disable-next-line max-len
    const url = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${trustWalletNetworkMap[network]}/tokenlist.json`
    const response = await fetch(url)
    const { tokens } = await response.json()
    return convertTokenInfoToMap(tokens)
  } catch (error) {
    console.warn('Failed to fetch TrustWallet tokenlist', error)
    return {}
  }
}

type TokenIconInfo = Pick<TokenInfo, 'address' | 'logoURI'>
function fetchLocalTokenIcons(): PartialTokenInfoMap {
  const tokenIcons: TokenIconInfo[] = []

  const localImages: string[] = fs.readdirSync('src/assets/images/tokens')
  localImages.map((imageName) => {
    const address = imageName.split('.png')[0]
    if (!isAddress(address)) return

    tokenIcons.push({
      address: getAddress(address),
      // eslint-disable-next-line max-len
      logoURI: `https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/${address.toLowerCase()}.png`,
    })
  })

  return convertTokenInfoToMap(tokenIcons as TokenInfo[])
}

function fetchExistingTokensListMap(network: Network): PartialTokenInfoMap {
  const tokens = existingTokenlist.tokens.filter(
    (token) => token.chainId === Number(network)
  )
  return convertTokenInfoToMap(tokens)
}

/**
 * Data hierarchy:
 * 1. Overwrites
 * 2. Local asset images
 * 3. Existing tokenlist
 * 4. TrustWallet data
 */
export async function fetchExistingMetadata(
  network: Network
): Promise<PartialTokenInfoMap> {
  const overwritesMetadata = overwrites[network]
  const localTokenIcons = fetchLocalTokenIcons()
  const existingListMetadata = fetchExistingTokensListMap(network)
  const trustwalletTokenList = await fetchTrustWalletMetadata(network)

  // With merge, the last argument takes precedence
  const data = merge(
    trustwalletTokenList,
    existingListMetadata,
    localTokenIcons,
    overwritesMetadata
  )
  fs.writeFile(
    `./test-${network.toString()}.json`,
    JSON.stringify(data, null, 4),
    (err) => console.log(err)
  )
  return data
}
