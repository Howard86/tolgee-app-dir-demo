import { useLocale } from 'next-intl'
import { cache } from 'react'

import { ALL_LOCALES, getStaticData, TolgeeBase } from './shared'

export const getTolgeeInstance = cache(async (locale: string) => {
  const tolgee = TolgeeBase().init({
    staticData: await getStaticData(ALL_LOCALES),
    observerOptions: {
      fullKeyEncode: true,
    },
    language: locale,
    fetch: async (input, init) =>
      fetch(input, { ...init, next: { revalidate: 0 } }),
  })

  await tolgee.run()

  return tolgee
})

export async function getTolgee() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale()

  const tolgee = await getTolgeeInstance(locale)

  return tolgee
}

export async function getTranslate() {
  const tolgee = await getTolgee()

  return tolgee.t
}
