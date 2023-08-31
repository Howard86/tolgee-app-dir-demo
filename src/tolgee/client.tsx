'use client'

import { TolgeeProvider, useTolgeeSSR } from '@tolgee/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { TolgeeBase } from './shared'

const tolgee = TolgeeBase().init()

interface TolgeeProviderProps {
  locales: any
  locale: string
  children: React.ReactNode
}

export function TolgeeNextProvider({
  locales,
  locale,
  children,
}: TolgeeProviderProps) {
  const router = useRouter()
  const tolgeeSSR = useTolgeeSSR(tolgee, locale, locales)

  useEffect(() => {
    const { unsubscribe } = tolgeeSSR.on('permanentChange', () => {
      router.refresh()
    })

    return unsubscribe
  }, [router, tolgeeSSR])

  return (
    <TolgeeProvider tolgee={tolgeeSSR} options={{ useSuspense: false }}>
      {children}
    </TolgeeProvider>
  )
}
