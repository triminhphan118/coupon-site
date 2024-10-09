import axiosInstance from '@/lib/axios'

export interface Supplier {
  display_name: string
  id: string
  login_name: string
  logo: string
  total_offer: number
}

export const getSuppliers = async (): Promise<Supplier[]> => {
  try {
    const response = await axiosInstance.get(
      'https://api.accesstrade.vn/v1/offers_informations/merchant_list',
    )

    return response.data.data
  } catch (error) {
    console.error('Error fetching suppliers:', error)
    throw error
  }
}

export const getRandom = async (): Promise<Supplier[]> => {
  try {
    const response = await axiosInstance.get(
      'https://jsonplaceholder.typicode.com/posts',
    )
    return response.data.data
  } catch (error) {
    console.error('Error fetching suppliers:', error)
    throw error
  }
}
