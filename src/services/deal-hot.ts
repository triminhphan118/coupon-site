import axiosInstance from '@/lib/axios'
import { Deal, DealResponse } from '@/types'

const API_ENDPOINTS = {
  DEALS: '/offers_informations',
}

export const getDeals = async (): Promise<Deal[]> => {
  try {
    const response = await axiosInstance.get<DealResponse>(API_ENDPOINTS.DEALS)
    return response.data.data
  } catch (error) {
    console.error('Error fetching deals:', error)
    throw error
  }
}
