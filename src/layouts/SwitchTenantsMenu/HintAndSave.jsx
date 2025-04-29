import React from 'react'

const HintAndSave = ({activeId, selectedId}) => {
    const isDisabled = selectedId === activeId;
    const isAnySelected = selectedId ? true : false;
    const isSaveable = isAnySelected && !isDisabled


  return (
    <div className='flex w-full h-[60px] items-center bg-dark absolute bottom-0'>
        <p className='flex justify-center text-white font-primary w-full font-bold 
                      text-center text-xl'>
            {isSaveable 
                ? `Click here to switch to ${selectedId?.name || 'a new tenant'}`
                : "Choose a tenant to switch into"
            }
        </p>
    </div>
  )
}

export default HintAndSave