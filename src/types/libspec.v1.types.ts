import type { Link, TagDefinition } from './openspec.types'

export interface LibSpec {
  /**
   * Version Number
   */
  libspec: '0001'

  info: LibraryInfo

  functions: LibraryFunction[]

  types: LibraryType[]
}

export type LibraryInfo = {
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
  description: string
  tags: TagDefinition[]
  options: string
}

export type LibraryType = {
  id: string
  title: string
  summary: string
  description: string
  value: string
  ref?: LibraryType
  links: Link[]
}

export type LibraryFunctionAttribute = {
  id: string
  title: string
  required: boolean
  description: string
  type?: string[]
  ref?: string // If a "type" is not supplied, a "ref" must be. This is a pointer to a type.
  children: LibraryFunctionAttribute[]
}

export type LibraryFunctionReturn = {
  id: string
  title: string
  value: string
  description: string
  ref?: string // This is a pointer to a type.
}

export type LibraryFunctionExample = {
  id: string
  title: string
  description?: string
  links: Link[]
  code: string
  returns?: LibraryFunctionReturn
}

export type LibraryFunction = {
  id: string
  title: string
  summary: string
  description?: string
  usage: string
  tags: string[]
  links: Link[]
  attributes?: LibraryFunctionAttribute[]
  returns?: LibraryFunctionReturn[]
  examples?: LibraryFunctionExample[]
}
