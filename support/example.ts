import {createClient} from '../src'

async function main() {
  const client = createClient('unix:///tmp/spire-agent/public/api.sock')

  const stream = client.fetchX509SVID({})
  for await (const message of stream.responses) {
    console.log(message)
  }

  await stream
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
