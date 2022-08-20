import type { Link, Tag } from './openspec.types'
import type { Url } from 'url'

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
  source: Url
  bugs: Url
  spec: Url
  description: string
  tags: Tag[]
}

export type ConfigParameter = {
  id: string
  title: string
  tags: Tag[]
  required: boolean
  description: string
  links: Link[]
}
