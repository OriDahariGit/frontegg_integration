import React from 'react'
import Button from './Button'

const ErrorMessage = ({ tryAgainHandler, children, title}) => {
  return (
    <div className='flex p-2 gap-2 w-full h-full justify-center'>
        <div className='flex flex-col w-[95%] h-fit p-2 border-1 items-center border-errortxt/70
                        bg-error/90 text-white font-primary rounded-sm 
                        drop-shadow-red-950 shadow-md '
        >
            {title ? <h4 className="text-xl">Error</h4> : null}
            <p className="flex flex-col w-full text-center">
                {children}
            </p>
        </div>
        {tryAgainHandler 
            ? (<Button 
                text={'Reload Tenants'} 
                onClickHandler={tryAgainHandler || null} 
            />) : null
        }
    </div>
  )
}

export default ErrorMessage