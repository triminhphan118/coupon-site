'use client'

import ActionsBar from '@/components/merchant/action/page'
import CategoryFilter from '@/components/merchant/category-filter/page'
import LinkInput from '@/components/merchant/search/page'
import VoucherList from '@/components/merchant/vocher/page'
import { useFetchWithPagination } from '@/hooks/useCoupons'
import { useFetchKeyWords } from '@/hooks/useFetchKeyWords'
import { useMerchant } from '@/hooks/useMerchant'
import { IOptions } from '@/types'
import React, { useEffect, useMemo } from 'react'

export default function MerchantPage({
  params,
}: {
  params: { merchant: string }
}) {
  const { data: merchants } = useMerchant()

  const currrentChant = useMemo(() => {
    return merchants?.find(
      merchant => merchant.login_name === params.merchant?.toLocaleLowerCase(),
    )
  }, [merchants, params.merchant])

  const { data: keyWords } = useFetchKeyWords(currrentChant?.id ?? '')

  const {
    data,
    currentPage,
    isLoading,
    totalPages,
    onSetFilter,
    filters,
    fetchNextPage,
  } = useFetchWithPagination(10, currrentChant?.id ?? '')
  const onSearch = (url: string) => {
    onSetFilter({ ...filters, url })
  }

  const onSetKeyWord = (keyword: string) => {
    onSetFilter({ ...filters, keyword })
  }

  useEffect(() => {
    if (currrentChant?.id) {
      onSetFilter({ ...filters, merchant: currrentChant?.id })
    }
  }, [currrentChant?.id])

  const onSelectFilter = (newFilters: IOptions) => {
    onSetFilter({ ...filters, ...newFilters })
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <header className='mb-8 text-center'>
        <h1 className='text-2xl font-bold mb-4'>
          Tìm mã giảm giá ngay thoi nào!!!
        </h1>
        <p className='text-sm text-gray-600'>
          Chuyên trang tổng hợp và chia sẻ miễn phí các mã giảm giá , chương
          trình khuyến mãi hot nhất cập nhật liên tục.
        </p>
      </header>

      <main>
        <section className='mb-8'>
          <LinkInput onSearch={onSearch} />
        </section>

        <CategoryFilter
          keyWords={keyWords ?? []}
          keyword={filters?.keyword}
          onSetKeyWord={onSetKeyWord}
        />
        <ActionsBar
          filters={filters}
          merchants={merchants}
          onSelectFilter={onSelectFilter}
        />

        <VoucherList
          vouchers={data}
          fetchNextPage={fetchNextPage}
          totalPages={totalPages}
          currentPage={currentPage}
          isLoading={isLoading}
        />
      </main>
    </div>
  )
}
