import type { AcceptedLanguages, Language } from '@payloadcms/translations'

export interface ModuleEnabled {
  categories: boolean
  'form-submissions': boolean
  forms: boolean
  media: boolean
  pages: boolean
  posts: boolean
  redirects: boolean
  search: boolean
  users: boolean
}

export interface GlobalEnabled {
  header: boolean
  footer: boolean
}

export interface SupportedLanguage {
  code: AcceptedLanguages
  label: string
  payload: Language
}
