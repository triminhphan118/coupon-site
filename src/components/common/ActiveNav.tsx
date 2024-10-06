'use client'

import { usePathname } from 'next/navigation'

import Link from 'next/link'
import { IActiveNavProps } from '@/types'

const ActiveNav = ({ url, children }: IActiveNavProps) => {
  const pathname = usePathname()
  const isActive = pathname === url
  return (
    <Link
      href={url}
      className={` py-2 px-3 rounded-md flex items-center gap-2 font-medium  transition-all  ${
        isActive
          ? 'text-primary bg-grayColor svg-animate'
          : 'hover:text-primary hover:bg-grayColor'
      }`}
    >
      {children}
    </Link>
  )
}

export default ActiveNav
