import { useContext } from "react"
import { MenuOpenContext } from "@/layouts/SwitchTenantsMenu/SideBar"

const ExpandIcon = () => {
  const { isOpen } = useContext(MenuOpenContext)
  return (
    <svg className={`flex p-3 fill-white transition-m
                    ${isOpen ? 'rotate-180' : ''}`} 
            height='100%' 
            viewBox="0 0 1920 1920" 
            xmlns="http://www.w3.org/2000/svg"
    >
        <path d="m.08 568.063 176.13-176.13 783.988 783.864 783.74-783.864 176.129 176.13-959.87 960.118z" fillRule="evenodd"/>
    </svg>
  )
}


export default ExpandIcon  