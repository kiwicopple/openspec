import { Link } from './openspec.types'
import { Url } from 'url'

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
  tags: string[]
  links: Link[]
  usage: string
  subcommands: string[]
  options: string
}

export interface CliSpec {
  clispec: '001'

  info: CliInfo

  commands: CliCommand[]
}
