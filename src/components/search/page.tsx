import { SearchIcon } from 'lucide-react'
import { Input } from '../ui/input'

const SearchInput = () => {
  return (
    <div className='flex w-full lg:w-[50%] '>
      <div className='relative w-full'>
        <SearchIcon className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input
          placeholder='Tìm kiếm'
          className='pl-8 outline-none focus-visible:shadow-none'
        />
      </div>
    </div>
  )
}

export default SearchInput
