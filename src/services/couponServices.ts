import axiosInstance from '@/lib/axios'
import { DataPromotion, ICouponParams, IKeyWord, Merchant } from '@/types'

const API_ENDPOINTS = {
  COUPONS: '/offers_informations/coupon',
  MERCHANTS: '/offers_informations/merchant_list',
  KEYWORDS: '/offers_informations/keyword_list',
  MULTI_MERCHANT_COUPONS: '/offers_informations/multi_link_2_coupons',
}

export const couponService = {
  getCoupons: async (params: ICouponParams = {}): Promise<DataPromotion> => {
    try {
      const response = await axiosInstance.get<DataPromotion>(
        API_ENDPOINTS.COUPONS,
        { params },
      )
      return response.data
    } catch (error) {
      console.error('Error fetching coupons:', error)
      throw error
    }
  },

  getMerchants: async (): Promise<Merchant[]> => {
    try {
      const response = await axiosInstance.get<{ data: Merchant[] }>(
        API_ENDPOINTS.MERCHANTS,
      )
      return response.data.data
    } catch (error) {
      console.error('Error fetching merchants:', error)
      throw error
    }
  },

  getKeywords: async (merchant: string): Promise<IKeyWord[]> => {
    try {
      const response = await axiosInstance.get<{ data: IKeyWord[] }>(
        API_ENDPOINTS.KEYWORDS,
        {
          params: { merchant },
        },
      )
      return response.data.data
    } catch (error) {
      console.error('Error fetching keywords:', error)
      throw error
    }
  },

  getMultiMerchantCoupons: async (params: ICouponParams) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.MULTI_MERCHANT_COUPONS,
        params,
      )
      return response.data
    } catch (error) {
      console.error('Error fetching multi merchant coupons:', error)
      throw error
    }
  },
}
