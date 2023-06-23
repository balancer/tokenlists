/**
 * 1. Takes 4 args from command line: network, pool type, and pool ID and optional pool description.
 * 2. Parses relevant network config pools allowlist file.
 * 3. Injects pool ID into the relevant pool type allowlist.
 * 4. Writes new file content back to file.
 *
 * Example usage:
 * npx vite-node ./src/lib/scripts/automatic-prs/allowlist-pool.ts --network mainnet --poolType=stable --poolId=\"0x...\" --poolDescription=foo/bar/baz
 */

import { cac } from 'cac'
import { allowListToken } from './edit-tokenlist.js'

const cli = cac()
cli
  .option('--network <network>', 'Choose a network')
  .option('--tokenAddress <tokenAddress>', 'Token Address')
  .option('--tokenSymbol <tokenSymbol>', 'Token Symbol')

const { options } = cli.parse()

console.log("Options: ", options);

const tokenAddress = options.tokenAddress.replace(
  /[^0-9a-fA-Fx]+/g,
  ''
) as string
let network = options.network as string
network = network.toLowerCase()
const { tokenSymbol } = options

validateInput({ network, tokenAddress })

console.log(`🛠️  Adding ${tokenAddress} to ${network}  allow list.`)

allowListToken({
  network,
  tokenAddress,
  tokenSymbol,
})

function validateInput({
  network,
  tokenAddress,
}: {
  network: string
  tokenAddress: string
}) {
  const networkNames = [
    'arbitrum',
    'gnosis-chain',
    'goerli',
    'mainnet',
    'polygon',
    'optimism',
    'zkevm',
  ]
  if (!networkNames.includes(network)) {
    throw Error(`Invalid network name: ${network}`)
  }

  if (tokenAddress.length !== 42) {
    throw Error(
      `Provided address (${tokenAddress}) does not have the expected length.`
    )
  }
}
