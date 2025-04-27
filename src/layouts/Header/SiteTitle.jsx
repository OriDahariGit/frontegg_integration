import React from 'react'
import FronteggIcon from '@/components/icons/FronteggIcon'

const SiteTitle = () => {
  return (
    <div className='inline-flex gap-2 text-2xl justify-center items-center cursor-default
            text-nowrap'>
        <FronteggIcon />
        <h1 className='font-beauty inline-flex'>| Home Assignment</h1>
    </div>
  )
}

export default SiteTitle