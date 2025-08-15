import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

// ✅ Centralized Metadata
export const metadata: Metadata = {
  title: 'INTERNATIONAL MARKETING SERVICES',
  description: 'Where Global Demand Meets Reliable Supply',
  generator: 'Factory Web Services',
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['international marketing', 'global supply', 'IMS', 'Factory Web Services'],
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
        alt: 'INTERNATIONAL MARKETING SERVICES Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INTERNATIONAL MARKETING SERVICES',
    description: 'Where Global Demand Meets Reliable Supply',
    images: ['/og-image.png'],
    creator: '@yourtwitterhandle',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon & PWA Support */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />

        {/* Global Font Styles */}
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
