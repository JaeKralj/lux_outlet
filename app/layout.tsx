import Footer from '@/components/Footer/Footer'
import Header from '@/components/Headers/Header'
import Providers from '@/components/Providers'
import { TailwindIndicator } from '@/components/dev/TailwindIndicator'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lux Outlet',
  description:
    "Shop the latest trends in women's clothing at Fashionista. From dresses to tops, we have everything you need to look your best. Free shipping on orders over $50!",
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { item: string }
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Providers>
          <Header />
          <main className='page'>{children}</main>
          <TailwindIndicator />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
