import './globals.css'
import { Providers } from '@/provider'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'BEA | Home',
  description: 'Book Events africa your number one event ticketing platform in africa',
  applicationName: 'Book Events Africa Website',
  authors: [{ name: 'BookEvents Africa Team', url: "https://www.bookevents.africa/teams" }],
  keywords: ['event ticketing', 'book events africa', 'number 1 event booking platform', 'african events', 'ticket sales', 'party', 'event organizers'],
  openGraph: {
    'type': 'website', url: "https://www.bookevents.africa", title: 'Book Events Africa', description: 'Book Events africa your number one event ticketing platform in africa', siteName: 'Book Events Africa', images: [{
      url: 'https://www.bookevents.africa/IMG_5247.jpg'
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
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>

    </html>
  )
}
