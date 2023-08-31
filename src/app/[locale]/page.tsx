import { getTranslate } from '@/tolgee/server'

import LangSelector from './LangSelector'

export default async function HomePage() {
  const t = await getTranslate()

  return (
    <main>
      <h1>{t('hello_world')}</h1>
      <LangSelector />
    </main>
  )
}
