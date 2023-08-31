import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  defaultLocale: 'en',
  locales: ['en', 'cs', 'zh-Hans', 'zh-Hant-TW'],
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
