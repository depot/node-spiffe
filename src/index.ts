import {ChannelCredentials} from '@grpc/grpc-js'
import {GrpcTransport} from '@protobuf-ts/grpc-transport'
import {SpiffeWorkloadAPIClient} from './proto/spiffe/workload/workload.client'

export function createClient(baseURL?: string) {
  const baseUrl = baseURL ?? process.env.SPIFFE_ENDPOINT_SOCKET
  if (!baseUrl) {
    throw new Error('SPIFFE_ENDPOINT_SOCKET environment variable is not set')
  }

  const transport = new GrpcTransport({
    host: baseUrl,
    channelCredentials: ChannelCredentials.createInsecure(),
    meta: {'workload.spiffe.io': 'true'},
  })
  return new SpiffeWorkloadAPIClient(transport)
}

export * from './proto/google/protobuf/struct'
export * from './proto/spiffe/workload/workload'
export * from './proto/spiffe/workload/workload.client'
