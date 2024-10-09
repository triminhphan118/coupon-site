import QueryClientProvider from '@/components/common/QueryClientProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mã giảm giá - Tìm kiếm mã giảm giá Shopee & Tiki',
  description: 'Tìm kiếm mã giảm giá hôm nay ngay thôi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <QueryClientProvider>{children}</QueryClientProvider>
}
