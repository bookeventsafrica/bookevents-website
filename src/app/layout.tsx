import './globals.css'
import { Providers } from '@/provider'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Book Events Africa',
  description: 'Book Events africa your number one event ticketing platform in africa',
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
