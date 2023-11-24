import {ChannelCredentials} from '@grpc/grpc-js'
import {Crypto} from '@peculiar/webcrypto'
import * as x509 from '@peculiar/x509'
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

/**
 * Utility function to parse a raw certificate. Can be used to convert the
 * raw certificate into a PEM certificate:
 *
 * ```typescript
 * const cert = parseCertificate(data)
 * const pem = cert.toString('pem')
 * ```
 *
 * **Note:** if you have a certificate bundle, use `parseCertificateBundle` instead, as
 * this function will incorrectly parse bundles as a single certificate.
 *
 * @param data The raw data of the certificate
 * @returns [X509Certificate](https://peculiarventures.github.io/x509/classes/X509Certificate.html)
 * @see https://github.com/PeculiarVentures/x509
 */
export function parseCertificate(data: Uint8Array): x509.X509Certificate {
  initCryptoProvider()

  return new x509.X509Certificate(data)
}

/**
 * Utility function to parse a certificate bundle. Can be used to convert the
 * bundle into a PEM chain:
 *
 * ```typescript
 * const certs = parseCertificateBundle(data)
 * const pemChain = certs.toString('pem-chain')
 * ```
 *
 * @param data The raw data of the certificate bundle
 * @returns [X509Certificates](https://peculiarventures.github.io/x509/classes/X509Certificates.html)
 * @see https://github.com/PeculiarVentures/x509
 */
export function parseCertificateBundle(data: Uint8Array): x509.X509Certificates {
  initCryptoProvider()

  let currentIndex = 0
  const certs: x509.X509Certificate[] = []

  while (currentIndex < data.length) {
    const beginOfSequence = currentIndex

    // Skip the first tag byte
    currentIndex += 1

    // Get the second byte for length value representing bytes
    let length = data[currentIndex++]
    if (length === 0x80) throw new TypeError('Indefinite length encoding not supported')
    if (length & 0x80) {
      const lengthBytes = length & 0x7f
      length = 0
      for (let i = 0; i < lengthBytes; i++) {
        length = (length << 8) | data[currentIndex++]
      }
    }

    certs.push(new x509.X509Certificate(data.slice(beginOfSequence, currentIndex + length)))

    // Move the current index to the next tag
    currentIndex += length
  }

  return new x509.X509Certificates(certs)
}

function initCryptoProvider() {
  try {
    x509.cryptoProvider.get()
  } catch {
    const crypto = new Crypto()
    x509.cryptoProvider.set(crypto)
  }
}

export * from './proto/google/protobuf/struct'
export * from './proto/spiffe/workload/workload'
export * from './proto/spiffe/workload/workload.client'
