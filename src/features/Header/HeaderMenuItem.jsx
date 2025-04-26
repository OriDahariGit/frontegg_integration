import { useState } from "react"


const HeaderMenuItem = ({Icon, label, onClick, onMouseEnter, onMouseLeave}) => {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='flex h-full justify-center aspect-square rounded-full p-1 relative cursor-pointer 
            bg-frontegg-lightpink hover:bg-frontegg-attention'
        onMouseEnter={() => {setIsHovered(true); onMouseEnter()}}
        onMouseLeave={() => {setIsHovered(false); onMouseLeave()}}
        onClick={() => onClick()}
    >
        <Icon isHovered={isHovered} />
        {(isHovered && label) ? (
            <p className='border-[0.5px] bg-white  border-frontegg-attention text-center px-2 text-sm rounded-full
                absolute top-10 shadow-frontegg-pinkhover shadow-sm text-nowrap'
            >
              {label}
            </p>
        ) : null}
    </div>
  )
}

export default HeaderMenuItem