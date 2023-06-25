import { Navbar, Footer } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car-la',
  description: 'A best place to rent, book, and ride and Car as easy as it can be.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
