import ActiveNav from '@/components/common/ActiveNav'
import { ModeToggle } from '@/components/common/ToggleMode'
import { menus } from '@/constants'
import { IMenuItemProps } from '@/types'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='h-20  p-5 border-b border-borderGray dark:border-borderDark'>
      <div className='flex items-center justify-between '>
        <Link href='/' className='logo font-bold text-2xl inline-block'>
          <span className='text-primary'>Zake</span>.io
        </Link>
        <div className='flex items-center gap-4'>
          <ul className='flex items-center gap-4'>
            {menus.map(menu => (
              <MenuItem
                key={menu.id}
                url={menu.url}
                title={menu.title}
                icon={menu.icon}
              />
            ))}
          </ul>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

const MenuItem = ({ url = '/', title = '', icon }: IMenuItemProps) => {
  return (
    <li>
      <ActiveNav url={url}>
        {icon}
        {title}
      </ActiveNav>
    </li>
  )
}

export default Header
