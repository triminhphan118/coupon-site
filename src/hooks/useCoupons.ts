import { useState, useEffect } from 'react'
import { getCoupon } from '@/services/couponServices'
import { IOptions, Promotion } from '@/types'
import { useParams } from 'next/navigation'

export function useFetchWithPagination(
  initialPageSize: number = 10,
  initialMerchant: string = '',
) {
  const [data, setData] = useState<Promotion[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [totalItems, setTotalItems] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [options, setOptions] = useState<IOptions>({
    keyword: '',
    merchant: '',
    sortBy: '',
    url: '',
    status: '',
  })
  const totalPages = Math.ceil(totalItems / pageSize)
  const params = useParams()

  const fetchData = async (page: number, isNewFilter: boolean = false) => {
    if (params.merchant && !options.merchant) {
      return
    }
    setIsLoading(true)
    try {
      const response = await getCoupon({
        ...(options.keyword ? { keyword: options.keyword } : {}),
        ...(options.merchant ? { merchant: options.merchant } : {}),
        ...(options.sortBy ? { sortBy: options.sortBy } : {}),
        ...(options.status ? { status: options.status } : {}),
        ...(options.url ? { url: options.url } : {}),
        page,
        limit: pageSize,
      })
      setData(prevData =>
        isNewFilter ? response.data : [...prevData, ...response.data],
      )
      setTotalItems(response.count)
      setIsLoading(false)
    } catch (err) {
      setError('Error fetching data')
      setIsLoading(false)
    }
  }

  const fetchNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const onSetFilter = (filters: IOptions) => {
    setOptions(filters)
    setCurrentPage(1)
    fetchData(1, true)
  }

  useEffect(() => {
    if (!initialMerchant) return
    fetchData(currentPage, currentPage === 1)
  }, [currentPage, pageSize, options])

  useEffect(() => {
    setOptions(prev => ({ ...prev, merchant: initialMerchant }))
  }, [initialMerchant])

  return {
    data,
    currentPage,
    totalPages,
    isLoading,
    error,
    fetchNextPage, // Add this new function to the return object
    filters: options,
    onSetFilter,
  }
}
