import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'INTERNATIONAL MARKETING SERVICES',
  description: 'Where Global Demand Meets Reliable Supply',
  generator: 'Factory Web Services',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'v0, app, nextjs, geist',
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  openGraph: {
    title: 'INTERNATIONAL MARKETING SERVICES',
    description: 'Where Global Demand Meets Reliable Supply',
    url: 'https://yourappdomain.com',
    siteName: 'INTERNATIONAL MARKETING SERVICES',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'v0 App Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'v0 App',
    description: 'Created with v0',
    images: ['/og-image.png'],
    creator: '@yourtwitterhandle',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
