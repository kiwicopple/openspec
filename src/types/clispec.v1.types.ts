import type { Link, Tag } from './openspec.types'
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
  spec: string
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
