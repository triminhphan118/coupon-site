'use client'

import {
  QueryClient,
  QueryClientProvider as QueryClientProviderWrap,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function QueryClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProviderWrap client={queryClient}>
      {children}
    </QueryClientProviderWrap>
  )
}
