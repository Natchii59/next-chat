import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from 'ui'

import '@/styles/globals.css'
import 'ui/styles/globals.css'

import { Analytics } from '@/components/analytics'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI'
  ],
  authors: [
    {
      name: 'Natchi',
      url: 'https://natchi.fr'
    }
  ],
  creator: 'Natchi',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@Natchi59'
  }
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='fr'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Analytics />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
