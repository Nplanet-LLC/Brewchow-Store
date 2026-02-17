import type { Metadata } from 'next'
import { Calistoga, Cabin_Condensed } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const calistoga = Calistoga({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-calistoga'
})

const cabinCondensed = Cabin_Condensed({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cabin'
})

export const metadata: Metadata = {
  title: 'Brewhaus – Webflow HTML website template',
  description: 'Enjoy handcrafted drinks, cozy cafés, and friendly baristas at Brewhaus. Visit our locations in New York for local flavor, good vibes, and fresh brews served daily.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${calistoga.variable} ${cabinCondensed.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
