import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Agustin Santagada — Designer',
  description: 'Designer based in Madrid with 20+ years of experience in branding, motion, UX/UI and art direction.',
  openGraph: {
    title: 'Agustin Santagada — Designer',
    description: 'Designer based in Madrid with 20+ years of experience.',
    url: 'https://www.agustinsantagada.com',
    siteName: 'Agustin Santagada',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <Nav />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
