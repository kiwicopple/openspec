import { SpecLink } from './general.types'
import { Url } from 'url'

export type LibraryInfo = {
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

export type LibraryType = {
  id: string
  title: string
  summary: string
  source: Url
  value: string
  ref?: LibraryType
  links: SpecLink[]
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
  links: SpecLink[]
  code: string
  returns?: LibraryFunctionReturn
}

export type LibraryFunction = {
  id: string
  title: string
  summary: string
  source: Url
  description?: string
  usage: string
  tags: string[]
  links: SpecLink[]
  attributes?: LibraryFunctionAttribute[]
  returns?: LibraryFunctionReturn[]
  examples?: LibraryFunctionExample[]
}

export interface LibSpec {
  Libspec: '001'

  info: LibraryInfo

  functions: LibraryFunction[]

  types: LibraryType[]
}