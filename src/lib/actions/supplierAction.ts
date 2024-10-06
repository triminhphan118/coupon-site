'use server'

import { getSuppliers } from '@/services/supplierService'

export async function getSuppliersAction() {
  try {
    const suppliers = await getSuppliers()
    return suppliers
  } catch (error) {
    console.log(error)
  }
}
