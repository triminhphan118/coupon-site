import { useQuery } from '@tanstack/react-query'
import { couponService } from '@/services/couponServices'

export const useFetchKeyWords = (merchant: string) => {
  return useQuery({
    queryKey: ['keywords', merchant],
    queryFn: () => couponService.getKeywords(merchant),
  })
}
