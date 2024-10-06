import { useQuery } from '@tanstack/react-query'
import { getMerchant } from '@/services/couponServices'

export const useMerchant = () => {
  return useQuery({
    queryKey: ['merchant'],
    queryFn: () => getMerchant(),
  })
}
