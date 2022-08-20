import type { Link, TagDefinition } from './openspec.types'
export interface CliSpec {
  /**
   * Version Number.
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
   * URL to the source code.
   */
  source: string
  /**
   * URL that users can use to report bugs.
   */
  bugs: string
  /**
   * URL to the spec document.
   */
  spec: string
  description: string
  tags: TagDefinition[]
  /**
   * A list of global options that can be used with the CLI.
   */
  flags: CliFlag[]
}

export type CliCommand = {
  /**
   * A unique identifier for the command. This is used to identify the command when it is used as a subcommand.
   */
  id: string
  /**
   * A text representing the command.
   */
  title: string
  /**
   * A brief description of the command, usually a short phrase for documentation purposes.
   */
  summary: string
  /**
   * A full description of what the command does.
   */
  description: string
  /**
   * A list of tags. Usually used for documentation purposes.
   */
  tags: string[]
  /**
   * A list of links. Usually used for documentation purposes.
   */
  links: Link[]
  /**
   * A code snippet that can be used to run the command. For example: "command subcommand [flags]"
   */
  usage: string
  /**
   * A list of IDs of commands that can be used as subcommands.
   */
  subcommands: string[]
  /**
   * Flags specific to this command.
   */
  flags: CliFlag[]
  /**
   * A list of examples.
   */
  examples: CliExample[]
}

export type CliFlag = {
  id: string
  title: string
  description: string
  alias?: string
  required?: boolean
}

export type CliExample = {
  id: string
  title: string
  description: string
  code: string
}
