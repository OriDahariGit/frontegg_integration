import React from 'react'
import { LogoIcon } from '@/components/icons'

const SiteTitle = () => {
  return (
    <div className='flex gap-2 justify-center items-center text-center text-nowrap cursor-default'> 
      <LogoIcon />
      <h3 className='text-2xl text-center'>Using <span className='font-semibold'>Frontegg</span></h3>
    </div>
  )
}

export default SiteTitle