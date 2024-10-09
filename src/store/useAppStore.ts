import { DataPromotion, Merchant, IKeyWord, CouponFilter, Deal } from '@/types'
import { create } from 'zustand'
import { couponService } from '@/services/couponServices'

interface StoreState {
  coupons: DataPromotion
  suppliers: Merchant[]
  loading: boolean
  error: Error | null
  couponFilter: CouponFilter
  keywords: IKeyWord[]
  deals: Deal[]

  setCoupons: (coupons: DataPromotion) => void
  setSuppliers: (suppliers: Merchant[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: Error | null) => void
  setCouponFilter: (filter: Partial<CouponFilter>) => void
  searchCoupons: () => Promise<void>
  setKeywords: (keywords: IKeyWord[]) => void
  setDeals: (deals: Deal[]) => void
}

const useAppStore = create<StoreState>((set, get) => ({
  coupons: {
    count: 0,
    data: [],
  },
  suppliers: [],
  keywords: [],
  loading: false,
  error: null,
  couponFilter: {},
  deals: [],
  setSuppliers: (suppliers: Merchant[]) => set({ suppliers }),
  setCoupons: (coupons: DataPromotion) => set({ coupons }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: Error | null) => set({ error }),
  setCouponFilter: (filter: Partial<CouponFilter>) =>
    set(state => ({
      couponFilter: { ...state.couponFilter, ...filter },
    })),
  searchCoupons: async () => {
    console.log('hi')

    const { couponFilter } = get()
    set({ loading: true, error: null })
    try {
      const coupons = await couponService.getCoupons(couponFilter)
      set({ coupons, loading: false })
    } catch (error) {
      set({ error: error as Error, loading: false })
    }
  },
  setKeywords: (keywords: IKeyWord[]) => set({ keywords }),
  setDeals: (deals: Deal[]) => set({ deals }),
}))

export default useAppStore
