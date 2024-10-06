import { Button } from '@/components/ui/button'
import CardPrmo from './card-v2/page'
import { Promotion } from '@/types'

export default function VoucherList({
  vouchers,
  fetchNextPage,
  totalPages,
  currentPage,
  isLoading,
}: {
  vouchers: Promotion[]
  fetchNextPage: () => void
  totalPages: number
  currentPage: number
  isLoading: boolean
}) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {vouchers.map(voucher => {
          return <CardPrmo key={voucher.id} voucher={voucher} />
        })}
      </div>
      {currentPage < totalPages && (
        <Button onClick={fetchNextPage} disabled={isLoading} className='mt-4'>
          {isLoading ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </div>
  )
}
