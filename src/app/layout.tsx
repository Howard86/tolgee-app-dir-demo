import './globals.css'

import type { Metadata } from 'next'
import type { ChildrenProps } from 'react'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../../mocks')
}

export const metadata: Metadata = {
  title: 'Next.js Tailwind Template',
  description: 'Next.js Tailwind Template',
}

export default function RootLayout({ children }: ChildrenProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}
