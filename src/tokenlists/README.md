# Tokenlists

## Create a new tokenlist

To create a new token list run:

```shell
npm run tokenlists:create my-new-tokenlist
```

This will generate two files nest in a folder called
`tokenlists/my-new-tokenlist`:

1. tokens.ts - Add token addresses here that you want to include in your
   tokenlist
2. overwrites.ts - Add overwrite data here for specific token addresses.

## Add new tokens it existing list

To add new tokens to an existing tokenlist, add the token address to the
`tokens.ts` file within the relevant network key.

## Remove a token from an existing list

To remove a token from an existing tokenlist, remove the token address from the
`tokens.ts` file.

## Overwrite tokenlist output data

To overwrite token metadata produced in the tokenslist, add the desired metadata
to the overwrites file where the key is the token address and the value is the
overwrite data you want to inject. For example, if you simply wanted to make
sure the token name for WETH was 'Wrapped Ether' then you would add:

```ts
'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': {
  name: 'Wrapped Ether',
}
```

within the `overwrites.ts` file under the relevant network key, in this case
`[Network.Ethereum]`
