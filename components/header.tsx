import Link from 'next/link'
import React from 'react'
import { getToken } from '../app/utils/auth'
import LogoutButton from './LogoutButton'

const Header = async () => {
  const token = getToken()

  return (
    <div className='h-16 flex items-center justify-between px-4 bg-gray-800 text-white'>
      <div className="flex items-center space-x-4 space-x-reverse">
        <Link href='/' className='hover:text-gray-300 px-3'>خانه</Link>
        {token && (
          <>
            <Link href='/dashboard' className='hover:text-gray-300'>داشبورد</Link>
            <Link href='/profile' className='hover:text-gray-300'>پروفایل</Link>
            <Link href='/settings' className='hover:text-gray-300'>تنظیمات</Link>
            <Link href='/userInfo' className='hover:text-gray-300'>userInfo</Link>
          </>
        )}
      </div>
      <div className="flex items-center space-x-4 space-x-reverse">
        {token ? (
          <LogoutButton />
        ) : (
          <>
            <Link href='/login' className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded'>ورود</Link>
            <Link href='/register' className='bg-green-600 hover:bg-green-700 px-4 py-2 rounded'>ثبت‌نام</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header