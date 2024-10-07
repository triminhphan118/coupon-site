import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { getSuppliersAction } from '@/lib/actions/supplierAction'
import Link from 'next/link'

export default async function SupplierPage() {
  const suppliers = await getSuppliersAction()
  if (!suppliers || suppliers.length === 0) {
    return <div>No suppliers found or error occurred.</div>
  }

  const lowerCase = (text: string): string => {
    if (!text) return text
    return text.toLowerCase()
  }
  return (
    <div className='container mx-auto px-4 mb-3'>
      <h1 className='text-2xl font-bold mb-6'>Nhà Cung Cấp Đang Có</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4'>
        {suppliers.map(supplier => (
          <Card key={supplier.id} className='overflow-hidden'>
            <Link href={`/merchant/${lowerCase(supplier.login_name || '')}`}>
              <CardContent className='p-4 cursor-pointer'>
                <Image
                  src={supplier.logo}
                  alt={`${supplier.display_name || 'Supplier'} logo`}
                  width={50}
                  height={50}
                  className='w-full h-auto object-cover mb-2 rounded-md'
                  unoptimized
                />
                <h2 className='font-semibold'>
                  {supplier.display_name || 'Unnamed Supplier'}
                </h2>
                <p className='text-sm text-gray-600'>
                  Offers: {supplier.total_offer}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
