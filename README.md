# `spiffe` Workload API client for Node.js

[![CI](https://github.com/depot/node-spiffe/actions/workflows/ci.yml/badge.svg)](https://github.com/depot/node-spiffe/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/spiffe.svg)](https://www.npmjs.com/package/spiffe)
![Powered by TypeScript](https://img.shields.io/badge/powered%20by-typescript-blue.svg)

A [SPIFFE Workload API](https://github.com/spiffe/spiffe/blob/main/standards/SPIFFE_Workload_API.md) client for Node.js.

## Installation

You can install the module with your favorite package manager:

```bash
# with pnpm
pnpm add spiffe

# with yarn
yarn add spiffe

# with npm
npm install spiffe
```

## Usage

Create a client:

```typescript
import {createClient} from 'spiffe'

// Connect to the endpoint set from the SPIFFE_ENDPOINT_SOCKET environment variable
const client = createClient()

// Connect to a specific endpoint
const client = createClient('unix:///path/to/endpoint.sock')

// Read x509 credentials from Workload API
const rpc = client.fetchX509SVID()
for await (const message of rpc.responses) {
  message.svids.forEach((svid) => {
    const certificateBase64 = Buffer.from(svid.x509Svid).toString('base64')
    console.log('Certificate in Base64 Format:', certificateBase64)
  })

  if (message.svids.length > 0) {
    break
  }
}
```

## License

MIT License, see `LICENSE`.
