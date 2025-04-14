import { GlobalEnabled, ModuleEnabled, SupportedLanguage } from './constrant-types'
import { en } from '@payloadcms/translations/languages/en'
import { nl } from '@payloadcms/translations/languages/nl'

export const WEBSITE_NAME: string = 'Lyttle Development'
export const MODULE_ENABLED: ModuleEnabled = {
  categories: false,
  'form-submissions': false,
  forms: false,
  media: true,
  pages: true,
  posts: false,
  redirects: false,
  search: false,
  users: true,
}
export const GLOBAL_ENABLED: GlobalEnabled = {
  header: false,
  footer: false,
}

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  {
    code: 'en',
    label: 'English',
    payload: en,
  },
  {
    code: 'nl',
    label: 'Nederlands',
    payload: nl,
  },
]

export const DEFAULT_LOCALE: SupportedLanguage = SUPPORTED_LANGUAGES[0]!
