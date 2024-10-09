import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function VoucherBanner() {
  return (
    <div className='p-4'>
      <Alert
        variant='default'
        className='cursor-pointer group hover:bg-primary/5 transition-colors duration-300 '
      >
        <Link
          href='/merchant/shopee'
          className='flex items-center justify-between'
        >
          <div className='flex items-center space-x-3'>
            <Search className='h-5 w-5 text-primary' />
            <div>
              <AlertTitle className='text-primary'>
                Search for Vouchers
              </AlertTitle>
              <AlertDescription className='text-muted-foreground group-hover:text-primary transition-colors duration-300'>
                Click here to find more great deals
              </AlertDescription>
            </div>
          </div>
          <ArrowRight className='h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300' />
        </Link>
      </Alert>
    </div>
  )
}
