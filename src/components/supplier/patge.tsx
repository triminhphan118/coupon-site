import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { getSuppliers, Supplier } from '@/services/supplierService'

export async function getServerSideProps() {
  try {
    const suppliers = await getSuppliers()
    return { props: { suppliers } }
  } catch (error) {
    console.error('Error fetching suppliers:', error)
    return { props: { suppliers: [], error: 'Failed to fetch suppliers' } }
  }
}

interface SupplierPageProps {
  suppliers: Supplier[]
  error?: string
}

export default function SupplierPage({ suppliers, error }: SupplierPageProps) {
  if (error) return <div>Error: {error}</div>

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6'>Nhà Cung Cấp Đang Có</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {suppliers.map(supplier => (
          <Card key={supplier.id} className='overflow-hidden'>
            <CardContent className='p-4'>
              <Image
                src={supplier.logo}
                alt={`${supplier.display_name[0]} logo`}
                width={200}
                height={200}
                className='w-full h-auto object-cover mb-2'
              />
              <h2 className='font-semibold'>{supplier.display_name[0]}</h2>
              <p className='text-sm text-gray-600'>
                Offers: {supplier.total_offer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
