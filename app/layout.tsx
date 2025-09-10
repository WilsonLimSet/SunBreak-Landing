import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://getsunbreak.com'),
  title: 'Sunbreak - Sleep Well, Live Intentionally',
  description: 'Block distracting apps at bedtime and wake up naturally with sunrise. No subscriptions, no photo verification - just better sleep habits.',
  keywords: 'sleep, bedtime, app blocker, screen time, digital wellness, ios app',
  icons: {
    icon: '/SBLogo.png',
    apple: '/SBLogo.png',
  },
  openGraph: {
    title: 'Sunbreak - Sleep Well, Live Intentionally',
    description: 'Block distracting apps at bedtime and wake up naturally with sunrise.',
    type: 'website',
    images: ['/SBLogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunbreak - Sleep Well, Live Intentionally',
    description: 'Block distracting apps at bedtime and wake up naturally with sunrise.',
    images: ['/SBLogo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}