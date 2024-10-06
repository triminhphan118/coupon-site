import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/4 mb-6 md:mb-0'>
            <h3 className='text-xl font-bold mb-4'>Về chúng tôi</h3>
            <p className='text-gray-400'>Hi</p>
          </div>
          <div className='w-full md:w-1/4 mb-6 md:mb-0'>
            <h3 className='text-xl font-bold mb-4'>Liên kết</h3>
            <ul className='text-gray-400'>
              <li className='mb-2'>
                <Link href='/'>Trang chủ</Link>
              </li>
              <li className='mb-2'>
                <Link href='/services'>Dịch vụ</Link>
              </li>
              <li className='mb-2'>
                <Link href='/about'>Về chúng tôi</Link>
              </li>
              <li className='mb-2'>
                <Link href='/contact'>Liên hệ</Link>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 mb-6 md:mb-0'>
            <h3 className='text-xl font-bold mb-4'>Liên hệ</h3>
            <p className='text-gray-400'>
              Thành phố Hồ Chí Minh
              <br />
              Email: kangaroo.org00@gmail.com
            </p>
          </div>
          <div className='w-full md:w-1/4'>
            <h3 className='text-xl font-bold mb-4'>Theo dõi chúng tôi</h3>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-400'>
          <p>&copy; 2024 Kangaroo.org</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
