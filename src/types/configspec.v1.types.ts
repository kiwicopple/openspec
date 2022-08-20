import type { Link, TagDefinition } from './openspec.types'

export interface ConfigSpec {
  /**
   * Version Number
   */
  configspec: '0001'

  info: ConfigInfo

  parameters: ConfigParameter[]
}

export type ConfigInfo = {
  id: string
  version: string
  title: string
  /**
   * URL to the source code
   */
  source: string
  /**
   * URL that users can use to report bugs
   */
  bugs: string
  /**
   * URL to the spec document
   */
  description: string
  tags: TagDefinition[]
}

export type ConfigParameter = {
  id: string
  title: string
  tags: string[]
  required: boolean
  description: string
  links: Link[]
}
