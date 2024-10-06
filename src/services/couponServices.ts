import axiosInstance from '@/lib/axios'
import { DataPromotion, ICouponParams, IKeyWord, Merchant } from '@/types'

export const getCoupon = async (
  params: ICouponParams = {},
): Promise<DataPromotion> => {
  try {
    const response = await axiosInstance.get(
      //   'https://jsonplaceholder.typicode.com/posts',
      'https://api.accesstrade.vn/v1/offers_informations/coupon',
      { params },
    )
    return response.data
  } catch (error) {
    console.error('Error fetching coupons:', error)
    throw error
  }
}

export const getMerchant = async (): Promise<Merchant[]> => {
  try {
    const response = await axiosInstance.get(
      `https://api.accesstrade.vn/v1/offers_informations/merchant_list`,
    )
    return response.data.data
  } catch (error) {
    console.error('Error fetching merchant:', error)
    throw error
  }
}

export const getKeywords = async (params: {
  merchant: string
}): Promise<IKeyWord[]> => {
  try {
    const response = await axiosInstance.get(
      `https://api.accesstrade.vn/v1/offers_informations/keyword_list?merchant=${params.merchant}`,
    )
    return response.data.data
  } catch (error) {
    console.error('Error fetching keyword:', error)
    throw error
  }
}
