import { useQuery } from '@tanstack/react-query'
import { getKeywords } from '@/services/couponServices'

export const useFetchKeyWords = (merchant: string) => {
  return useQuery({
    queryKey: ['keywords', merchant],
    queryFn: () => getKeywords({ merchant }),
  })
}
