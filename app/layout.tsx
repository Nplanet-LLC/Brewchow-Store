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
  title: 'Café Blou – Café de cœur à Saint-Romuald',
  description: 'Café Blou à Saint-Romuald. Un espace chaleureux où chaque moment compte. Savourez nos cafés artisanaux, lattes, cappuccinos et plus encore.',
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
    <html lang="fr">
      <body className={`${calistoga.variable} ${cabinCondensed.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
