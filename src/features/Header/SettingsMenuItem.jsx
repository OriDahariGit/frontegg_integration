import { useState, useContext } from "react";
import { AdminPortal } from "@frontegg/react";
// Components

import SettingsIcon from "../../components/icons/SettingsIcon";
import { SettingsHoverContext } from "../../contexts/SettingsHoverContext"

const handleSettingsBtnClick = () => {
    AdminPortal.openHosted();
};

// TODO: Copy HeaderMenuItem here!
const SettingsMenuItem = () => {
    const [isHovered, setIsHovered] = useState(false)
    const { isAnchorHovered } = useContext(SettingsHoverContext)

    return (
        <div className={`flex h-full justify-center aspect-square rounded-full 
                        p-1 relative cursor-pointer hover:bg-frontegg-attention
                        ${isAnchorHovered ? 'bg-frontegg-attention attention-flash-bg' : 'bg-frontegg-lightpink'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleSettingsBtnClick()}
        >
            <SettingsIcon />
            { isHovered ? (
                <p className='border-[0.5px] bg-white  border-frontegg-attention text-center px-2 text-sm rounded-full
                    absolute top-10 shadow-frontegg-pinkhover shadow-sm text-nowrap'
                >
                    Settings
                </p>
            ) : null }
        </div>
    );
};

export default SettingsMenuItem;
