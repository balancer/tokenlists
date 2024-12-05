const DRPC_KEY = process.env.DRPC_KEY || ''
export const dRpcUrl = (chainName: string) =>
  `https://lb.drpc.org/ogrpc?network=${chainName}&dkey=${DRPC_KEY}`
