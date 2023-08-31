import { notFound } from 'next/navigation'
import { useLocale } from 'next-intl'

import { TolgeeNextProvider } from '@/tolgee/client'
import { getStaticData } from '@/tolgee/shared'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = useLocale()

  const locales = await getStaticData(['en', locale])

  if (params.locale !== locale) return notFound()

  return (
    <html className="h-full" data-theme="light" lang={locale}>
      <body className="h-full">
        <TolgeeNextProvider locale={locale} locales={locales}>
          {children}
        </TolgeeNextProvider>
      </body>
    </html>
  )
}
