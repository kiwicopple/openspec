import * as OpenSpec from './types/openspec.types'
import { handleInput } from './handler'
const argv = require('minimist')(process.argv.slice(2))

function main(command: string[], options?: any) {
  handleInput(command.join(' '), options)
}

// Run everything
main(argv['_'], argv)
export { main, OpenSpec }
