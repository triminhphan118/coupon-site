import { useState, useEffect } from 'react'
import { Supplier, getSuppliers } from '@/services/supplierService'

export const useSuppliers = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const data = await getSuppliers()
        setSuppliers(data)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'))
        setLoading(false)
      }
    }

    fetchSuppliers()
  }, [])

  return { suppliers, loading, error }
}
