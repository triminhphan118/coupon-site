'use client'

import { Button } from '@/components/ui/button'
import useAppStore from '@/store/useAppStore'

export default function CategoryFilter() {
  const { keywords, couponFilter, setCouponFilter, searchCoupons } =
    useAppStore()

  if (!keywords) return null

  const handleSelectKeyword = (keyWordCurrent: string) => {
    if (couponFilter.keyword === keyWordCurrent) {
      setCouponFilter({ keyword: '' })
    } else {
      setCouponFilter({ keyword: keyWordCurrent })
    }
    searchCoupons()
  }

  return (
    <div className='flex flex-wrap gap-2 mb-8'>
      <Button
        variant={`${couponFilter.keyword === '' ? 'default' : 'outline'}`}
        className='rounded-full'
        onClick={() => handleSelectKeyword('')}
      >
        Tất cả
      </Button>
      {keywords.map(keyWord => (
        <Button
          key={keyWord.keyword}
          variant={`${
            couponFilter.keyword === keyWord.keyword ? 'default' : 'outline'
          }`}
          className='rounded-full'
          onClick={() => handleSelectKeyword(keyWord.keyword)}
        >
          {keyWord.keyword}
        </Button>
      ))}
    </div>
  )
}
