import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Promotion } from '@/types'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Check, Copy } from 'lucide-react'

const CardPrmo = ({ voucher }: { voucher: Promotion }) => {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(voucher.coupons[0].coupon_code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className='overflow-hidden transition-shadow hover:shadow-lg'>
      <CardContent className='p-4'>
        <div className='flex items-center mb-4'>
          <div className='border-primary/10 border bg-primary/5 rounded-full mr-3 overflow-hidden w-12 h-12 shrink-0'>
            <Image
              src={voucher.image}
              alt={voucher.campaign_name}
              width={48}
              height={48}
              className='w-full h-full object-cover'
            />
          </div>
          <div>
            <h3 className='font-bold text-lg text-primary'>
              {voucher.campaign_name}
            </h3>
            <p className='text-sm text-gray-600'>{voucher.name}</p>
          </div>
        </div>
        <p className='text-sm text-gray-700 mb-4 line-clamp-2'>
          {voucher.content}
        </p>
      </CardContent>
      <CardFooter className='p-4 bg-gray-50 flex justify-between items-center'>
        <p className='text-sm font-medium text-primary'>{voucher?.time_left}</p>
        <div className='space-x-2'>
          <Dialog>
            <DialogTrigger asChild>
              <Button size='sm'>Xem chi tiết</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>{voucher.campaign_name}</DialogTitle>
              </DialogHeader>
              <ScrollArea className='mt-4 max-h-[60vh]'>
                <div className='space-y-4'>
                  <p>
                    <strong>Tên chương trình:</strong> {voucher.name}
                  </p>
                  <p>
                    <strong>Mã giảm giá:</strong>{' '}
                    {voucher.coupons[0].coupon_code}
                  </p>
                  <p>
                    <strong>Thời gian còn lại:</strong> {voucher.time_left}
                  </p>
                  <p>
                    <strong>Nội dung:</strong> {voucher.content}
                  </p>
                  <p>
                    <strong>Mô tả mã giảm giá:</strong>{' '}
                    {voucher.coupons[0].coupon_desc}
                  </p>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
          <Button variant='outline' size='sm' onClick={copyCode}>
            {copied ? (
              <Check className='w-4 h-4 mr-1' />
            ) : (
              <Copy className='w-4 h-4 mr-1' />
            )}
            {copied ? 'Đã sao chép' : 'Sao chép mã'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardPrmo
