import React, { useState } from 'react'
// Component
import SwitchTenantBtn from './SwitchTenantBtn'
import TenantList from './TenantList'

const FoldedTenantList = () => {
    const [isListOpened, setIsListOpen] = useState(false)

    const handlTenantBtnClick = () => {
        setIsListOpen(isListOpened ? false : true)
    }

    return (
        <div className="relative flex justify-center items-center h-full px-2">
            <SwitchTenantBtn />
            <TenantList />
        </div>
    )
}

export default FoldedTenantList