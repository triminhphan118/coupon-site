import type { Metadata } from 'next'
import './globals.css'
import { jost } from '@/utils'
import Header from '@/components/layout/header'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/layout/footer/page'
import { ProgressBar } from '@/components/common/ProgressBar'

export const metadata: Metadata = {
  title: 'Mã giảm giá | Tìm kiếm mã giảm giá hôm nay',
  description:
    'Trang web tổng hợp và chia sẻ miễn phí các mã giảm giá, chương trình khuyến mãi hot nhất, cập nhật liên tục.',
  keywords: 'mã giảm giá, khuyến mãi, coupon, voucher, deal hot',
  icons: {
    icon: '/img/alo.png',
    apple: '/img/alo.png',
  },
  openGraph: {
    title: 'Mã giảm giá | Tìm kiếm mã giảm giá hôm nay',
    description:
      'Trang web tổng hợp và chia sẻ miễn phí các mã giảm giá, chương trình khuyến mãi hot nhất, cập nhật liên tục.',
    type: 'website',
    url: '/img/alo.png',
    images: [
      {
        url: '/img/alo.png',
        width: 1200,
        height: 630,
        alt: 'Mã giảm giá',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/img/alo.png' type='image/png' />
        <meta
          name='google-site-verification'
          content='deWYh_QKmuZs-ZU_2TJvLR8uFJrEXX4dT03EH6yrgJc'
        />
      </head>
      <body className={`${jost.variable} font-primary antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <div className='wrapper h-screen'>
            <Header />
            <ProgressBar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
