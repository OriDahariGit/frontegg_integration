import { useState } from "react"


const HeaderMenuItem = ({Icon, label}) => {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='flex h-full justify-center aspect-square bg-frontegg-lightpink rounded-full p-1 relative'
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
        <Icon />
        {isHovered ? (
            <p className="bg-white border-[0.5px] border-black text-center px-2 text-sm rounded-full top-10 absolute">
                {label}
            </p>
        ) : null}
    </div>
  )
}

export default HeaderMenuItem