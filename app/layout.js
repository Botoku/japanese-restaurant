import './globals.css'
import { Inter } from 'next/font/google'
import '../styles/fonts.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import 'remixicon/fonts/remixicon.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Miyabi House',
  description: 'Japanese Restaurant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}</body>
        <Footer />

    </html>
  )
}
