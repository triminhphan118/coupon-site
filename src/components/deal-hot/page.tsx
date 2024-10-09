'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import useAppStore from '@/store/useAppStore'
import { Calendar, ExternalLink, Tag } from 'lucide-react'
import Image from 'next/image'

export default function CompactDealList() {
  const { deals } = useAppStore(state => state)
  console.log(deals)
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Hot Deals</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {deals.map(deal => (
          <Card
            key={deal.id}
            className='overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between'
          >
            <CardContent className='p-4 flex flex-col'>
              <div className='flex items-center space-x-3 mb-3'>
                <Image
                  src={deal.image}
                  alt={deal.merchant}
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <div>
                  <h2 className='font-semibold text-lg leading-tight'>
                    {deal.merchant}
                  </h2>
                  <p className='text-xs text-muted-foreground'>{deal.domain}</p>
                </div>
              </div>
              <h3 className='font-bold text-lg mb-2 line-clamp-2'>
                {deal.name}
              </h3>
              <p className='text-sm text-muted-foreground mb-3 line-clamp-2'>
                {deal.content}
              </p>
              <div className='flex items-center text-xs text-muted-foreground mb-3'>
                <Calendar className='w-3 h-3 mr-1' />
                <span>
                  {new Date(deal.start_time).toLocaleDateString()} -{' '}
                  {new Date(deal.end_time).toLocaleDateString()}
                </span>
              </div>
              <div className='flex flex-wrap gap-1 mb-3'>
                {deal.categories.map((category, index) => (
                  <Badge key={index} variant='secondary' className='text-xs'>
                    {category.category_name_show}
                  </Badge>
                ))}
              </div>
              {deal.coupons.map((coupon, index) => (
                <div key={index} className='bg-primary/10 p-2 rounded-md mb-3'>
                  <div className='flex items-center space-x-2 mb-1'>
                    <Tag className='w-3 h-3 text-primary' />
                    <span className='font-semibold text-sm'>
                      {coupon.coupon_code}
                    </span>
                  </div>
                  <p className='text-xs text-muted-foreground'>
                    {coupon.coupon_desc}
                  </p>
                </div>
              ))}
            </CardContent>
            <CardFooter className='p-4 pt-0'>
              <Button asChild className='w-full' size='sm'>
                <a
                  href={deal.aff_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center'
                >
                  Get Deal <ExternalLink className='w-3 h-3 ml-2' />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
