import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES } from '../../constrants'

function hasLocale(languages: string[], language: string): boolean {
  // Check if any of the user's preferred languages start with the specified language.
  return languages.some((locale) => locale.toLowerCase().startsWith(language))
}

export function getUserLocale(): string {
  try {
    // Get an array of user-preferred languages. If navigator.languages is not available,
    // fall back to navigator.language in an array format.
    const userLocales: string[] = [...(navigator.languages || [navigator.language] || [])]

    // Check if the user's preferred languages match any of the supported languages.
    const matchedLocale = SUPPORTED_LANGUAGES.map((l) => l.code).find((locale) =>
      hasLocale(userLocales, locale),
    )

    // If a match is found, return it; otherwise, return the first supported language.
    return matchedLocale || DEFAULT_LOCALE.code
  } catch (_) {}
  return DEFAULT_LOCALE.code
}
