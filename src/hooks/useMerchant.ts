import { useQuery } from '@tanstack/react-query'
import { couponService } from '@/services/couponServices'

export const useMerchant = () => {
  return useQuery({
    queryKey: ['merchant'],
    queryFn: () => couponService.getMerchants(),
  })
}
