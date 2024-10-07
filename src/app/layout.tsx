import type { Metadata } from 'next'
import './globals.css'
import { jost } from '@/utils'
import Header from '@/components/layout/header'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/layout/footer/page'
import ScriptLoader from '@/components/common/ScriptLoader'
import Script from 'next/script'

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
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
          rel='stylesheet'
        />
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
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
        <ScriptLoader />

        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-YE2MLYL4Q2'
        ></Script>
        <Script>
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YE2MLYL4Q2');
  `}
        </Script>
      </body>
    </html>
  )
}
