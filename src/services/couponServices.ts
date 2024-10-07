import axiosInstance from '@/lib/axios'
import { DataPromotion, ICouponParams, IKeyWord, Merchant } from '@/types'

const API_ENDPOINTS = {
  COUPONS: '/offers_informations/coupon',
  MERCHANTS: '/offers_informations/merchant_list',
  KEYWORDS: '/offers_informations/keyword_list',
}

export const couponService = {
  getCoupons: async (params: ICouponParams = {}): Promise<DataPromotion> => {
    const response = await axiosInstance.get(API_ENDPOINTS.COUPONS, { params })
    return response.data
  },

  getMerchants: async (): Promise<Merchant[]> => {
    const response = await axiosInstance.get(API_ENDPOINTS.MERCHANTS)
    return response.data.data
  },

  getKeywords: async (merchant: string): Promise<Merchant[]> => {
    const response = await axiosInstance.get(API_ENDPOINTS.KEYWORDS, {
      params: { merchant },
    })
    return response.data.data
  },
}
