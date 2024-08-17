import { getAddress, InfuraProvider, JsonRpcProvider } from 'ethers'
import { Network, PartialTokenInfoMap } from '../../types'
import config from '../../config'
import { Multicaller } from '../multicaller'
import ERC20_ABI from '../abi/ERC20.abi.json'
import _ from 'lodash'

function getProvider(network: Network): InfuraProvider | JsonRpcProvider {
  if (!process.env.INFURA_KEY) throw new Error('Missing INFURA_KEY env var')
  const networkConfig = config[network]
  if (networkConfig.rpc) {
    return new JsonRpcProvider(networkConfig.rpc)
  }
  return new InfuraProvider(Number(network), process.env.INFURA_KEY)
}

export async function fetchOnchainMetadata(
  network: Network,
  tokenAddresses: string[]
): Promise<PartialTokenInfoMap> {
  const provider = getProvider(network)
  const multicaller = new Multicaller({ network, provider })

  let chunks: string[][] = []

  if (network === Network.Zkevm) {
    // zkevm can only do 195 calls at a time
    chunks = _.chunk(tokenAddresses, 1)
  } else {
    chunks = _.chunk(tokenAddresses, 200)
  }

  let result: PartialTokenInfoMap = {}

  for (const chunk of chunks) {
    for (const address of chunk) {
      multicaller
        .addCall({
          key: `${address}.name`,
          address: getAddress(address),
          function: 'name',
          abi: ERC20_ABI,
        })
        .addCall({
          key: `${address}.symbol`,
          address: getAddress(address),
          function: 'symbol',
          abi: ERC20_ABI,
        })
        .addCall({
          key: `${address}.decimals`,
          address: getAddress(address),
          function: 'decimals',
          abi: ERC20_ABI,
        })
    }
    result = { ...result, ...(await multicaller.fetch()) }
  }

  return result
}
