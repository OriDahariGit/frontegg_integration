import React from 'react'
import LogoIcon from '../icons/LogoIcon'

const SiteTitle = () => {
  return (
    <div className='flex gap-2 justify-center items-center text-center text-nowrap'> 
      <LogoIcon />
      <h3 className='text-2xl text-center'>Using <span className='font-semibold'>Frontegg</span></h3>
    </div>
  )
}

export default SiteTitle