import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
export default function LinkInput({
  onSearch,
}: {
  onSearch: (url: string) => void
}) {
  const [url, setUrl] = useState('')
  const { toast } = useToast()

  const handleSubmit = () => {
    if (url.trim()?.includes('https://') || url.trim() === '') {
      onSearch(url)
    } else {
      toast({
        title: 'Vui lòng nhập link sản phẩm đúng',
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      <div className='flex items-center space-x-2 mb-4'>
        <Input
          type='text'
          placeholder='Dán link sản phẩm  tại đây'
          className='flex-grow'
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
      </div>
      <Button
        className='w-full bg-green-600 hover:bg-green-700 text-white'
        onClick={handleSubmit}
      >
        Kiểm Tra Link Sản Phẩm
      </Button>
    </>
  )
}
