'use client'

import { useTolgee } from '@tolgee/react'
import { usePathname, useRouter } from 'next-intl/client'
import { useTransition } from 'react'

export default function LangSelector() {
  const tolgee = useTolgee(['language'])
  const locale = tolgee.getLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const [, startTransition] = useTransition()

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <select
      className="select select-bordered w-full max-w-xs"
      onChange={onSelectChange}
      value={locale}
    >
      <option value="en">English</option>
      <option value="cs">Česky</option>
      <option value="zh-Hans">简体中文</option>
      <option value="zh-Hant-TW">繁體中文</option>
    </select>
  )
}
