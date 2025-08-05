import { TokenInfo, TokenList } from '@uniswap/token-lists'
import { getAddress, isAddress } from 'ethers'
import fs from 'fs'
import { merge, pick } from 'lodash'
import config from '../../config'
import { Network, OverwritesForList, PartialTokenInfoMap } from '../../types'

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
    const url = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${config[network].trustWalletNetwork}/tokenlist.json`
    const response = await fetch(url)
    const { tokens } = await response.json()
    for (const token of tokens) {
      // A couple of logo links in the trustwallet list are missing the token
      // address, this hack fixes them.
      if (token.logoURI.includes('//logo.png')) {
        token.logoURI = token.logoURI.replace(
          '//logo.png',
          `/${token.address}/logo.png`
        )
      }
    }
    return convertTokenInfoToMap(tokens)
  } catch (error) {
    console.warn('Failed to fetch TrustWallet tokenlist', error)
    return {}
  }
}

type TokenIconInfo = Pick<TokenInfo, 'address' | 'logoURI'>
function fetchLocalTokenIcons(network: Network): PartialTokenInfoMap {
  const tokenIcons: TokenIconInfo[] = []

  const localImages: string[] = fs.readdirSync('src/assets/images/tokens')
  localImages.map((imageName) => {
    const match = imageName.match(/^(.+)\.(png|svg)$/)
    if (!match) return

    const fileName = match[1]
    const fileExtension = match[2]

    if (fileName && !isAddress(fileName)) {
      const [_network, _address] = (fileName as string).split('_')
      if (_network === network && isAddress(_address)) {
        tokenIcons.push({
          address: getAddress(_address),
          logoURI: `https://raw.githubusercontent.com/burrbear-dev/tokenlists/main/src/assets/images/tokens/${(
            fileName as string
          ).toLowerCase()}.${fileExtension}`,
        })
      }
    } else {
      tokenIcons.push({
        address: getAddress(fileName),
        logoURI: `https://raw.githubusercontent.com/burrbear-dev/tokenlists/main/src/assets/images/tokens/${(
          fileName as string
        ).toLowerCase()}.${fileExtension}`,
      })
    }
  })

  return convertTokenInfoToMap(tokenIcons as TokenInfo[])
}

function fetchExistingTokensListMap(
  network: Network,
  existingTokenlist: TokenList | undefined
): PartialTokenInfoMap {
  if (!existingTokenlist) return {}

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
  network: Network,
  overwrites: OverwritesForList,
  existingTokenList: TokenList | undefined
): Promise<PartialTokenInfoMap> {
  const overwritesMetadata = overwrites[network]

  const overwritesMetadataFormatted:
    | Record<string, Partial<TokenInfo>>
    | undefined = {}

  for (const overwriteTokenAddress in overwritesMetadata) {
    const data = overwritesMetadata[overwriteTokenAddress]
    overwritesMetadataFormatted[getAddress(overwriteTokenAddress)] = {
      ...data,
      address: data.address ? getAddress(data.address) : data.address,
    }
  }

  const localTokenIcons = fetchLocalTokenIcons(network)
  const existingListMetadata = fetchExistingTokensListMap(
    network,
    existingTokenList
  )
  const trustwalletTokenList = await fetchTrustWalletMetadata(network)

  // With merge, the last argument takes precedence
  return merge(
    trustwalletTokenList,
    existingListMetadata,
    localTokenIcons,
    overwritesMetadataFormatted
  )
}
