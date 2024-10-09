'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import useAppStore from '@/store/useAppStore'

export default function LinkInput() {
  const { couponFilter, setCouponFilter, searchCoupons } = useAppStore()
  const { toast } = useToast()

  const handleSubmit = () => {
    if (
      couponFilter.url?.trim()?.includes('https://') ||
      couponFilter.url?.trim() === ''
    ) {
      searchCoupons()
    } else {
      toast({
        title: 'Vui lòng nhập link sản phẩm đúng',
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      <div className='flex items-center space-x-2 mb-4'>
        <Input
          type='text'
          placeholder='Dán link sản phẩm tại đây'
          className='flex-grow'
          value={couponFilter.url || ''}
          onChange={e => setCouponFilter({ url: e.target.value })}
        />
      </div>
      <Button
        className='w-full bg-green-600 hover:bg-green-700 text-white'
        onClick={handleSubmit}
      >
        Kiểm Tra Link Sản Phẩm
      </Button>
    </>
  )
}
