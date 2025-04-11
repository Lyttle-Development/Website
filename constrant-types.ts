import type { Language } from '@payloadcms/translations'

export interface ModuleEnabled {
  pages: boolean
  posts: boolean
  media: boolean
  categories: boolean
  users: boolean
}

export interface SupportedLanguage {
  code: string
  label: string
  payload: Language
}
