import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import { IBanner } from '@/types'

export function CarouselSize() {
  const items: IBanner[] = [
    {
      id: 1,
      image:
        'https://down-tx-sg.img.susercontent.com/vn-11134294-7ras8-m0wju117so0fd7.webp',
      link: 'https://s.shopee.vn/qRGxl6mE1',
    },
    {
      id: 2,
      image:
        'https://down-tx-sg.img.susercontent.com/vn-11134294-7r98o-lyymlc14no9t69.webp',
      link: 'https://s.shopee.vn/9pM5ebt4HA',
    },
    {
      id: 3,
      image:
        'https://down-tx-sg.img.susercontent.com/vn-11134294-7r98o-lwf9c4ted68pbc.webp',
      link: 'https://s.shopee.vn/9f2fSIthc9',
    },
    {
      id: 4,
      image:
        'https://down-tx-sg.img.susercontent.com/vn-11134294-7r98o-lz4l76cimaml0e.webp',
      link: 'https://s.shopee.vn/9UjFFzuKx8',
    },
    {
      id: 5,
      image:
        'https://down-tx-sg.img.susercontent.com/vn-11134294-7ras8-m0wzs72nqfjhd2.webp',
      link: 'https://s.shopee.vn/9KPp3guyI7',
    },
  ]
  return (
    <Carousel className='w-[70%] mx-auto'>
      <CarouselContent>
        {items.map(item => (
          <CarouselItem key={item.id}>
            <div className='p-1'>
              <Card>
                <CardContent className='p-0'>
                  <Link
                    href={item.link}
                    className='block w-full h-[250px] rounded-md overflow-hidden'
                    target='_blank'
                  >
                    <Image
                      src={item.image}
                      alt='Banner'
                      width={300}
                      height={250}
                      className='w-full h-full object-cover'
                      unoptimized
                    />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    // <Carousel
    //   opts={{
    //     align: 'start',
    //     loop: true,
    //   }}
    //   className='w-full max-w-xs'
    // >
    //   <CarouselContent className='-ml-4'>
    //     {' '}
    //     {items.map((item, index) => (
    //       <CarouselItem key={index} className=' basis-full'>
    //         <div className='p-1'>
    //           <Card className='h-full  md:h-[420px] overflow-hidden'>
    //             <CardContent className='flex aspect-square items-center justify-center p-0 h-full w-full object-cover'>
    //               <Link
    //                 href={item.link}
    //                 className='w-full rounded-md overflow-hidden h-full'
    //               >
    //                 <Image
    //                   src={item.image}
    //                   alt='Banner'
    //                   width={300}
    //                   height={400}
    //                   className='w-full h-full object-cover'
    //                 />
    //               </Link>
    //               <CarouselPrevious />
    //               <CarouselNext />
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    // </Carousel>
  )
}
