import * as CliSpecV1 from './clispec.v1.types'
import * as ConfigSpecV1 from './configspec.v1.types'
import * as LibSpecV1 from './libspec.v1.types'
import { Url } from 'url'

type Link = {
  name: string
  url: Url
}

export {
  // Specification version
  CliSpecV1,
  ConfigSpecV1,
  LibSpecV1,
  // Generic types
  Link,
  Url,
}
