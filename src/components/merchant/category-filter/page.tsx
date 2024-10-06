import { Button } from '@/components/ui/button'
import { IKeyWord } from '@/types'

export default function CategoryFilter({
  keyWords,
  onSetKeyWord,
  keyword,
}: {
  keyWords: IKeyWord[]
  keyword: string
  onSetKeyWord: (keyword: string) => void
}) {
  if (!keyWords) return null
  const handleSelectKeyword = (keyWordCurrent: string) => {
    if (keyword === keyWordCurrent) {
      onSetKeyWord('')
    } else {
      onSetKeyWord(keyWordCurrent)
    }
  }
  return (
    <div className='flex flex-wrap gap-2 mb-8'>
      <Button
        variant={`${keyword === '' ? 'default' : 'outline'}`}
        className='rounded-full'
        onClick={() => onSetKeyWord('')}
      >
        Tất cả
      </Button>
      {keyWords.map(keyWord => (
        <Button
          key={keyWord.keyword}
          variant={`${keyword === keyWord.keyword ? 'default' : 'outline'}`}
          className='rounded-full'
          onClick={() => handleSelectKeyword(keyWord.keyword)}
        >
          {keyWord.keyword}
        </Button>
      ))}
    </div>
  )
}
