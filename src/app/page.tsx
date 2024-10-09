import { Suspense } from 'react'
import BannerSection from '@/components/banner/page'
import Campaign from '@/components/campagin/page'
import Container from '@/components/common/Container'
import Divider from '@/components/common/Divider'
import { getSuppliersAction } from '@/lib/actions/supplierAction'
import ClientComponent from '@/components/common/ClientComponent'
import { couponService } from '@/services/couponServices'
import CompactDealList from '@/components/deal-hot/page'
import { getDeals } from '@/services/deal-hot'
import VoucherBanner from '@/components/voucher-banner/page'

export default async function Home() {
  const [suppliers, deals] = await Promise.all([
    couponService.getMerchants(),
    getDeals(),
  ])

  if (!suppliers || suppliers.length === 0) {
    return <div>No suppliers found or error occurred.</div>
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientComponent initialSuppliers={suppliers} initialDeals={deals} />
      </Suspense>
      <Container className='bg-[#f4f4f5] hidden md:block'>
        <BannerSection />
      </Container>
      <Divider />
      <Container>
        <Campaign />
        <VoucherBanner />
        <CompactDealList />
        <Divider />
      </Container>
    </div>
  )
}
