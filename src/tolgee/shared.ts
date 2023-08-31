import { DevTools, FormatSimple, Tolgee } from '@tolgee/web'

export const ALL_LOCALES = ['en', 'cs', 'zh-Hans', 'zh-Hant-TW']

export const DEFAULT_LOCALE = 'en'

export async function getStaticData(languages: string[]) {
  const result: Record<string, any> = {}

  for (const lang of languages) {
    // eslint-disable-next-line no-await-in-loop
    result[lang] = (await import(`../i18n/${lang}.json`)).default
  }

  return result
}

export function TolgeeBase() {
  return Tolgee().use(FormatSimple()).use(DevTools()).updateDefaults({
    apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
    apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
  })
}
