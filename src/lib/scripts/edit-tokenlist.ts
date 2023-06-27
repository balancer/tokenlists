import * as fs from 'fs'

export function allowListToken({
  network,
  tokenAddress,
  tokenSymbol = '',
}: Record<string, string>) {
  const filePath = `./src/tokenlists/balancer/tokens/${network}.ts`

  const fileContent = fs.readFileSync(filePath, 'utf-8')

  const regex = new RegExp(`\\[([\\s\\S]+?)\\]`)

  const match = fileContent.match(regex)

  if (!match) throw Error('Token List not found')

  const arrayContent = match[1].trim()

  if (arrayContent.includes(tokenAddress)) {
    console.log(`${tokenAddress} is already allowlisted`)
    return
  }

  let updatedArrayContent = `${arrayContent}\n  '${tokenAddress}',`

  if (tokenSymbol) updatedArrayContent += ` // ${tokenSymbol}`

  // Replaces file with updated content:
  const updatedContent = fileContent.replace(arrayContent, updatedArrayContent)

  fs.writeFileSync(filePath, updatedContent)

  console.log(`💾 ${network}.ts file updated.`)
}
