import './globals.css'
import { Providers } from '@/provider'
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Book Events Africa | Home',
  description: 'Book Events Africa your number one event ticketing platform in Africa, we are committed to streamlining event management through advanced ticketing solutions. We offer a seamless and intuitive experience for both event organizers and attendees. Our goal is to transform the event planning and ticketing industry, offering smooth booking experiences for attendees and dedicated, customer-focused services for event planners. With our easy-to-use online ticketing services, we make planning and attending events stress-free. Contact us today to discover how we can help you optimize your event management',
  applicationName: 'Book Events Africa Website',
  authors: [{ name: 'BookEvents Africa Team', url: "https://www.bookevents.africa/about-us" }],
  keywords: ['event ticket', 'event ticketing', 'event ticketing platform', 'book events africa', 'number 1 event booking platform', 'african events', 'ticket sales', 'party', 'event organizers', 'advanced ticketing solutions', 'ticketing solutions', 'event ticketing solutions', 'event planning', 'ticketing industry', 'smooth booking experience', 'smooth ticketing', ' Stress-free event management', 'Hassle-free event planning', 'Customer-focused services', 'Online ticketing'],
  openGraph: {
    'type': 'website', url: "https://www.bookevents.africa", title: 'Book Events Africa', description: 'Book Events Africa your number one event ticketing platform in Africa, we are committed to streamlining event management through advanced ticketing solutions. We offer a seamless and intuitive experience for both event organizers and attendees. Our goal is to transform the event planning and ticketing industry, offering smooth booking experiences for attendees and dedicated, customer-focused services for event planners. With our easy-to-use online ticketing services, we make planning and attending events stress-free. Contact us today to discover how we can help you optimize your event management', siteName: 'Book Events Africa', images: [{
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

          <Script id="tawk" strategy="lazyOnload">
            {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/663a4c0007f59932ab3cffae/1ht9rhq77';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `}
          </Script>
        </Providers>
      </body>
    </html>
  )
}
