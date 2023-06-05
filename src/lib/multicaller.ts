import {
  Contract,
  JsonRpcProvider,
  FunctionFragment,
  Interface,
  getAddress,
} from 'ethers'
import { Network } from '../types'
import { set } from 'lodash'
import chalk from 'chalk'
import config from '../config'

/**
 * TYPES
 */
export type Call = {
  key: string
  address: string
  function: string | FunctionFragment
  abi: any
  params?: any[]
}

export type Args = {
  network?: Network | null
  provider?: JsonRpcProvider | string | null
  options?: Record<string, any> | null
  requireAll?: boolean | null
}
const args: Args = {}

/**
 * Multicaller is a simple wrapper around a Multicaller contract for fetching
 * onchain data.
 */
export class Multicaller {
  public address: string
  public provider: JsonRpcProvider
  public calls: Call[] = []
  public paths: string[] = []
  public options?: Record<string, any> | null
  public requireAll?: boolean | null

  /**
   * Initialize multicaller instance.
   *
   * @param {Network} args.network - Network to make contract calls on.
   * @param {JsonRpcProvider|string} args.provider - RPC URL or Ethers.js
   * JsonRpcProvider for making contract calls.
   * @param {Record<string,any>} [args.options={}] - Global options for all contract calls.
   * @param {boolean} [args.requireAll=false] - Requires all calls to be
   * successful, otherwise can return partial results.
   */
  constructor({
    network = null,
    provider = null,
    options = {},
    requireAll = false,
  } = args) {
    if (!network) throw new Error('Must pass network argument')
    if (!provider) throw new Error('Must pass provider argument')

    this.address = this.getMulticallerAddress(network)
    this.provider = this.getProvider(provider)
    this.options = options
    this.requireAll = requireAll
  }

  /**
   * Adds a contract call to the calls array.
   *
   * @param {string} callParams.key - Key to use for results object.
   * @param {address} callParams.address - Contract address for call.
   * @param {string|FunctionFragment} callParams.function - Function to call on contract.
   * @param {ContractInterface} callParams.abi - Contract ABI.
   * @param {any[]} callParams.params - Contract function input params.
   */
  public addCall(callParams: Call): Multicaller {
    this.calls.push(callParams)
    this.paths.push(callParams.key)
    return this
  }

  /**
   * Executes all calls added via addCall.
   *
   * @param {Object} from - An object to inject with results of calls.
   * @returns Object with results at specified key paths.
   */
  public async fetch<T = any>(from?: Record<string, unknown>): Promise<T> {
    const obj = from || {}
    const result = await this._fetch()
    result.forEach((r, i) => set(obj, this.paths[i], r))
    this.calls = []
    this.paths = []
    return obj as T
  }

  /**
   * PRIVATE METHODS
   */
  private async _fetch<T>(): Promise<(T | null)[]> {
    const multicaller = this.getMulticallerInstance()
    const interfaces = this.callInterfaces()

    try {
      const res: [boolean, string][] = await multicaller.tryAggregate(
        // if false, allows individual calls to fail without causing entire multicall to fail
        this.requireAll,
        this.encodedCalls(),
        this.options
      )

      return res.map(([success, returnData], i) => {
        if (!success) return null
        try {
          const decodedResult = interfaces[i].decodeFunctionResult(
            this.calls[i].function,
            returnData
          )
          // Automatically unwrap any simple return values
          return decodedResult.length > 1 ? decodedResult : decodedResult[0]
        } catch (error) {
          console.log(
            chalk.dim(
              'Failed to decode return data:',
              returnData,
              ', call:',
              this.calls[i].address,
              '#',
              this.calls[i].function
            )
          )
          returnData
        }
      })
    } catch (e) {
      return Promise.reject(e)
    }
  }

  private getMulticallerInstance(): Contract {
    return new Contract(
      this.address,
      [
        `function tryAggregate(
          bool requireSuccess,
          tuple(address, bytes)[] memory calls
        ) public view returns (tuple(bool, bytes)[] memory returnData)`,
      ],
      this.provider
    )
  }

  private callInterfaces(): Interface[] {
    return this.calls.map((call) => new Interface(call.abi))
  }

  private encodedCalls(): Array<string[]> {
    const interfaces = this.callInterfaces()

    return this.calls.map((call, i) => [
      call.address.toLowerCase(),
      interfaces[i].encodeFunctionData(call.function, call.params),
    ])
  }

  private getMulticallerAddress(network: Network): string {
    try {
      return getAddress(config[network].addresses.multicaller)
    } catch (error) {
      throw new Error(`Multicaller does not support this network: ${network}`)
    }
  }

  private getProvider(provider: JsonRpcProvider | string): JsonRpcProvider {
    try {
      if (typeof provider === 'string') {
        return new JsonRpcProvider(provider)
      } else {
        return provider
      }
    } catch (error) {
      throw new Error(
        `Multicaller unable to establish provider for: ${provider}`
      )
    }
  }
}
