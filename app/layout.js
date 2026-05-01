import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import StyledJsxRegistry from './registry'
import './globals.css'

export const metadata = {
  title: {
    default: 'Muvr — Book Movers, Delivery & Junk Removal in 60 Seconds',
    template: '%s | Muvr',
  },
  description:
    'Book vetted movers, same-day delivery, and junk removal in 60 seconds. Flat-rate pricing. No hidden fees. Available in 1,000+ cities.',
  keywords: ['moving', 'delivery', 'junk removal', 'movers near me', 'furniture delivery'],
  openGraph: {
    type: 'website',
    siteName: 'Muvr',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledJsxRegistry>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
