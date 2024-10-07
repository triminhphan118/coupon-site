import { FormEventHandler, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { IActionBarProps, Merchant } from '@/types'
import Link from 'next/link'

export default function ActionBar({
  merchants,
  onSelectFilter,
  filters,
}: IActionBarProps) {
  const toggleSupplier = (supplierName: Merchant) => {
    // const oldMerchant = filters?.merchant
    //   ? filters?.merchant?.includes(',')
    //     ? filters.merchant.split(',')
    //     : [filters.merchant]
    //   : []
    // const newMerchant = oldMerchant.includes(supplierName)
    //   ? oldMerchant.filter(name => name !== supplierName)
    //   : [...oldMerchant, supplierName]
    // onSelectFilter({ ...filters, merchant: newMerchant.join(',') })
  }

  const handleChangeStatus = (value: string) => {
    onSelectFilter({
      ...filters,
      is_next_day_coupon: value === 'active' ? 'false' : 'True',
    })
  }
  return (
    <Card className='w-full mb-4'>
      <CardContent className='p-6'>
        <div className='flex flex-col space-y-4'>
          <div className='flex flex-wrap gap-4 justify-between'>
            <div className='flex flex-wrap gap-4'>
              {merchants?.map(merchant => (
                <Link
                  href={`/merchant/${merchant.login_name?.toLowerCase()}`}
                  key={merchant.id}
                >
                  <Button
                    key={merchant.id}
                    variant={
                      [
                        ...(filters?.merchant?.split(',') ?? []),
                        merchant?.login_name,
                      ]?.includes(merchant.id)
                        ? 'default'
                        : 'outline'
                    }
                    className='flex items-center space-x-2'
                    // onClick={() => toggleSupplier(merchant)}
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
                </Link>
              ))}
            </div>
            <div className='flex items-center space-x-2'>
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline'>
                    Deal Type <ChevronDown className='ml-2 h-4 w-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56'>
                  <DropdownMenuLabel>Select Deal Types</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Hot Deals
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Vouchers</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Coupons</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
              <div className='flex justify-center w-fit'>
                <Tabs
                  value={
                    filters?.is_next_day_coupon === 'True'
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
