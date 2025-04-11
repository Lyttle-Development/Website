import { ModuleEnabled, SupportedLanguage } from './constrant-types'
import { en } from '@payloadcms/translations/languages/en'
import { nl } from '@payloadcms/translations/languages/nl'

export const WEBSITE_NAME: string = 'Lyttle Development'
export const MODULE_ENABLED: ModuleEnabled = {
  pages: true,
  posts: true,
  media: true,
  categories: false,
  users: true,
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
