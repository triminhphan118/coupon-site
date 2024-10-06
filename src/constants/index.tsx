import {
  IconGift,
  IconPencil,
  IconSearch,
  IconShoppingCart,
} from '@/components/icons'
import { IMenuItemProps } from '@/types'

const menus: IMenuItemProps[] = [
  {
    id: 1,
    title: 'Mã Shopee',
    url: '/merchant/shopee',
    icon: <IconGift className='size-5' />,
  },
  {
    id: 2,
    title: 'Mã Tiki',
    url: '/merchant/tikivn',
    icon: <IconShoppingCart className='size-5' />,
  },
  {
    id: 3,
    title: 'Page',
    url: '/page',
    icon: <IconSearch className='size-5' />,
  },
  {
    id: 4,
    title: 'Blog',
    url: '/blog',
    icon: <IconPencil className='size-5' />,
  },
]

export { menus }
