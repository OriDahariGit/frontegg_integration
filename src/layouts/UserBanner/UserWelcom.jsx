import React from 'react'
import { AdminPortal } from '@frontegg/react'


const SettingsAnchor = () => {
    return (
        <span className="textlink" onClick={AdminPortal.openHosted}>
            Settings
        </span>
    )
}


const UserWelcom = () => {
  return (
    <div className="flex flex-col w-full h-full max-h-[20%] justify-end 
                    items-center px-3 py-4 text-xl text-center font-numan"
    >   
        <p className="flex flex-wrap gap-x-[0.3rem] justify-center content-end w-full
                    border-frontegg-accent/20 border-[1px] bg-frontegg-callout/20
                    py-3 rounded-sm">
            To enter the <b>Self Service Portal,</b> click on the <SettingsAnchor /> button at the top
            left of the screen
        </p>
    </div>
  )
}

export default UserWelcom