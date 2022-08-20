import * as CliSpecV1 from './clispec.v1.types'
import * as ConfigSpecV1 from './configspec.v1.types'
import * as LibSpecV1 from './libspec.v1.types'

type Link = {
  name: string
  url: string
}

type Tag = {
  id: string
  title: string
  description?: string
}

export {
  // Specification version
  CliSpecV1,
  ConfigSpecV1,
  LibSpecV1,
  // Generic types
  Link,
  Tag,
}
