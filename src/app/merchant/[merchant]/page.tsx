import ClientComponent from '@/components/common/ClientComponent'
import ActionsBar from '@/components/merchant/action/page'
import CategoryFilter from '@/components/merchant/category-filter/page'
import LinkInput from '@/components/merchant/search/page'
import VoucherList from '@/components/merchant/vocher/page'
import { couponService } from '@/services/couponServices'
import React, { Suspense } from 'react'

export default async function MerchantPage({
  params,
}: {
  params: { merchant: string }
}) {
  const suppliers = await couponService.getMerchants()

  if (!suppliers || suppliers.length === 0) {
    return <div>No suppliers found or error occurred.</div>
  }

  const merchant = suppliers.find(
    supplier => supplier.login_name === params.merchant,
  )
  if (!merchant) {
    return <div>No merchant found or error occurred.</div>
  }
  const [coupons, keywords] = await Promise.all([
    couponService.getCoupons({
      merchant: merchant?.id,
    }),
    couponService.getKeywords(merchant?.id ?? ''),
  ])

  if (!coupons || coupons.data?.length === 0) {
    return <div>No coupons found or error occurred.</div>
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientComponent
          initialSuppliers={suppliers}
          initialCoupons={coupons}
          initialKeywords={keywords}
          initialMerchantKey={merchant?.id}
        />
      </Suspense>
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
          <LinkInput />
        </section>

        <CategoryFilter />
        <ActionsBar />

        <VoucherList />
      </main>
    </div>
  )
}
