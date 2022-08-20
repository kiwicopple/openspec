import { Link } from './openspec.types'
import { Url } from 'url'

export type Tag = {
  id: string
  title: string
  description?: string
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
  tags: string[]
  required: boolean
  description: string
  links: Link[]
}

export interface ConfigSpec {
  configspec: '0001'

  info: ConfigInfo

  parameters: ConfigParameter[]
}
