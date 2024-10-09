'use client'

import { Button } from '@/components/ui/button'
import CardPrmo from './card-v2/page'
import useAppStore from '@/store/useAppStore'
import { useEffect, useState } from 'react'

export default function VoucherList() {
  const { coupons, loading, searchCoupons, setCouponFilter } = useAppStore()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10 // Số mục trên mỗi trang, bạn có thể điều chỉnh

  const totalPages = Math.ceil((coupons.count || 0) / itemsPerPage)

  const fetchNextPage = () => {
    const nextPage = currentPage + 1
    setCurrentPage(nextPage)
    setCouponFilter({ page: nextPage })
    searchCoupons()
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {coupons.data.map(voucher => (
          <CardPrmo key={voucher.id} voucher={voucher} />
        ))}
      </div>
      {currentPage < totalPages && (
        <Button onClick={fetchNextPage} disabled={loading} className='mt-4'>
          {loading ? 'Loading...' : 'Load More'}
        </Button>
      )}
      <div className='mt-4'>
        Page {currentPage} of {totalPages}
      </div>
    </div>
  )
}
