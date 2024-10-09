'use client'

import { useEffect } from 'react'
import useAppStore from '@/store/useAppStore'
import { Deal, IKeyWord, Merchant } from '@/types'
import { DataPromotion } from '@/types'

interface ClientComponentProps {
  initialSuppliers?: Merchant[] // Replace 'any' with your actual supplier type
  initialCoupons?: DataPromotion
  initialKeywords?: IKeyWord[]
  initialMerchantKey?: string
  initialDeals?: Deal[]
}

export default function ClientComponent({
  initialSuppliers,
  initialCoupons,
  initialKeywords,
  initialMerchantKey,
  initialDeals,
}: ClientComponentProps) {
  const { setSuppliers, setCoupons, setKeywords, setCouponFilter, setDeals } =
    useAppStore(state => state)

  useEffect(() => {
    if (initialSuppliers) {
      setSuppliers(initialSuppliers)
    }
    if (initialCoupons) {
      setCoupons(initialCoupons)
    }
    if (initialKeywords) {
      setKeywords(initialKeywords)
    }
    if (initialMerchantKey) {
      setCouponFilter({ merchant: initialMerchantKey })
    }
    if (initialDeals) {
      setDeals(initialDeals)
    }
  }, [
    initialSuppliers,
    initialCoupons,
    initialKeywords,
    setSuppliers,
    setCoupons,
    setKeywords,
  ])

  return null // This component doesn't render anything
}
