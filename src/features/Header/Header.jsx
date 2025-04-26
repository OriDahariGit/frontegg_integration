import React from 'react'
import { useAuth } from '@frontegg/react'
// Components
import SiteTitle from './SiteTitle'
import HeaderMenu from './HeaderMenu'
import LogInBtn from '@/components/LogInBtn'
import LogOutBtn from '@/components/LogoutBtn'


const Header = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className='w-full h-[50px] flex justify-between bg-white px-5 py-2 fixed z-40'>
      <HeaderMenu className='w-full' />
      <SiteTitle className='w-full' />
      {isAuthenticated ? <LogOutBtn className='w-full' /> : <LogInBtn className='w-full' />}
    </div>
  )
}

export default Header