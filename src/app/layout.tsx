import './globals.css'
import { Providers } from '@/provider'
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Book Events Africa | Home',
  description: 'Book Events Africa your number one event ticketing platform in Africa',
  applicationName: 'Book Events Africa Website',
  authors: [{ name: 'BookEvents Africa Team', url: "https://www.bookevents.africa/teams" }],
  keywords: ['event ticketing', 'book events africa', 'number 1 event booking platform', 'african events', 'ticket sales', 'party', 'event organizers'],
  openGraph: {
    'type': 'website', url: "https://www.bookevents.africa", title: 'Book Events Africa', description: 'Book Events Africa your number one event ticketing platform in africa', siteName: 'Book Events Africa', images: [{
      url: 'https://www.bookevents.africa/IMG_5247.jpg',
      width: 1200, height: 630
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: "@site",
    creator: "@creator",
    images: 'https://www.bookevents.africa/IMG_5247.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dev = process.env.NEXT_PUBLIC_ENV === 'development';
  return (
    <html lang="en">
      {!dev && <GoogleAnalytics gaId="G-SX372Q5B82" />}
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
