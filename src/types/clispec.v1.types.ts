import type { Link, Tag } from './openspec.types'
import type { Url } from 'url'
export interface CliSpec {
  /**
   * Version Number
   */
  clispec: '001'

  info: CliInfo

  commands: CliCommand[]
}

export type CliInfo = {
  id: string
  version: string
  title: string
  language: string
  source: Url
  bugs: Url
  spec: Url
  description: string
  options: string
}

export type CliCommand = {
  id: string
  title: string
  summary: string
  description: string
  tags: Tag[]
  links: Link[]
  usage: string
  subcommands: string[]
  options: string
}
