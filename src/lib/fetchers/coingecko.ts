import { TokenInfo } from '@uniswap/token-lists'
import chalk from 'chalk'
import { Network } from '../../types'
import { sleep } from '../utils'
import config from '../../config'

const baseUrl = process.env.COINGECKO_API_KEY
  ? 'https://pro-api.coingecko.com/api/v3'
  : 'https://api.coingecko.com/api/v3'

const apiKeyParam = process.env.COINGECKO_API_KEY
  ? `x_cg_pro_api_key=${process.env.COINGECKO_API_KEY}`
  : ''

let callIndex = 0

export async function fetchCoingeckoMetadata(
  network: Network,
  address: string
): Promise<Partial<TokenInfo> | undefined> {
  try {
    callIndex++
    // Coingecko rate limits their API to 10 calls/second if we dont use pro
    if (baseUrl !== 'https://pro-api.coingecko.com/api/v3') {
      if (callIndex > 0 && callIndex % 10 === 0) {
        console.log(chalk.dim('Waiting for 2s to avoid Coingecko rate limit'))
        await sleep(3000)
      }
    }

    const response = await fetch(
      `${baseUrl}/coins/${
        config[network].coingecko.platformId
      }/contract/${address.toLowerCase()}?${apiKeyParam}`
    )

    if (response.status !== 200) {
      throw new Error('Coingecko API error, status: ' + response.statusText)
    }

    const data = await response.json()

    const {
      name,
      symbol,
      image: { large: logoURI },
    } = data

    return {
      address,
      name,
      symbol,
      logoURI,
    }
  } catch (e) {
    console.log(e)
    console.log(chalk.dim(`Coingecko (not found): ${address}`))
    return undefined
  }
}
