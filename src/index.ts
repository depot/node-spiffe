import {createPromiseClient, Transport} from '@bufbuild/connect'
import {createGrpcTransport} from '@bufbuild/connect-node'
import {SpiffeWorkloadAPI} from './proto/spiffe/workload/workload_connect'

export function createClient(baseURL?: string) {
  const baseUrl = baseURL ?? process.env.SPIFFE_ENDPOINT_SOCKET
  if (!baseUrl) {
    throw new Error('SPIFFE_ENDPOINT_SOCKET environment variable is not set')
  }
  const transport = createGrpcTransport({httpVersion: '2', baseUrl})
  return createClientFromTransport(transport)
}

export function createClientFromTransport(transport: Transport) {
  return createPromiseClient(SpiffeWorkloadAPI, transport)
}

export * from './proto/spiffe/workload/workload_connect'
export * from './proto/spiffe/workload/workload_pb'
