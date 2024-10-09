'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { IActionBarProps, Merchant } from '@/types'
import Link from 'next/link'
import useAppStore from '@/store/useAppStore'

export default function ActionBar() {
  const { couponFilter, suppliers, setCouponFilter, searchCoupons } =
    useAppStore()

  const toggleSupplier = (merchant: Merchant) => {
    const oldMerchants = couponFilter.merchant
      ? couponFilter.merchant.split(',')
      : []
    const newMerchants = oldMerchants.includes(merchant.id)
      ? oldMerchants.filter(id => id !== merchant.id)
      : [...oldMerchants, merchant.id]

    setCouponFilter({ merchant: newMerchants.join(',') })
    searchCoupons()
  }

  const handleChangeStatus = (value: string) => {
    setCouponFilter({
      is_next_day_coupon: value === 'active' ? 'false' : 'True',
    })
    searchCoupons()
  }

  return (
    <Card className='w-full mb-4'>
      <CardContent className='p-6'>
        <div className='flex flex-col space-y-4'>
          <div className='flex flex-wrap gap-4 justify-between'>
            <div className='flex flex-wrap gap-4'>
              {suppliers?.map(merchant => (
                <Button
                  key={merchant.id}
                  variant={
                    couponFilter.merchant?.split(',').includes(merchant.id)
                      ? 'default'
                      : 'outline'
                  }
                  className='flex items-center space-x-2'
                  onClick={() => toggleSupplier(merchant)}
                >
                  <Image
                    src={merchant.logo}
                    alt={`${merchant.login_name} logo`}
                    width={24}
                    height={24}
                    className='rounded-sm'
                  />
                  <span>{merchant.login_name}</span>
                </Button>
              ))}
            </div>
            <div className='flex items-center space-x-2'>
              <div className='flex justify-center w-fit'>
                <Tabs
                  value={
                    couponFilter.is_next_day_coupon === 'True'
                      ? 'upcoming'
                      : 'active'
                  }
                  className='w-full'
                  onValueChange={handleChangeStatus}
                >
                  <TabsList className='grid w-full grid-cols-2'>
                    <TabsTrigger value='active'>Đang mở</TabsTrigger>
                    <TabsTrigger value='upcoming'>Sắp mở</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
