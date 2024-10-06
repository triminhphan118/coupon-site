import QueryClientProvider from '@/components/common/QueryClientProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mã giảm giá',
  description: 'Tìm kiếm mã giảm giá hôm nay',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <QueryClientProvider>{children}</QueryClientProvider>
}
