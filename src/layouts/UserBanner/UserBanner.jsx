import React, { useContext } from "react";
import { AdminPortal } from "@frontegg/react";
// Components
import { SettingsHoverContext } from "../../contexts/SettingsHoverContext";
import UserInfoItem from "./UserInfoItem";
import ActionAnchor from "../../components/ActionAnchor";



const UserBanner = () => {
    const { setIsAnchorHovered } = useContext(SettingsHoverContext)

    const SettingsAnchor = () => { 
        return (
            <ActionAnchor 
                    clickHandler={AdminPortal.openHosted}
                    mouseEnterHandler={() => setIsAnchorHovered(true)}
                    mouseLeaveHandler={() => setIsAnchorHovered(false)}
            >
                Settings
            </ActionAnchor>
        )
    }

    return (
        <div
            className="flex flex-col w-full h-full max-w-[500px] max-h-[500px] 
                    bg-white p-4 rounded-lg items-center justify-evenly gap-6
                    shadow-frontegg-dark/20 border-[0.5px] border-black/20 shadow-xl
                    relative"
        >
            <UserInfoItem />
            <div className="flex flex-col w-full h-full max-h-[35%] justify-end items-center px-3 py-4 
                    text-xl text-center font-numan  
                   "
            >
                <p className="flex flex-wrap gap-x-[0.3rem] justify-center content-end w-full
                         border-frontegg-accent/20 border-[1px] bg-frontegg-callout/20
                         py-3 rounded-sm">
                    To enter the <b>Self Service Portal,</b> click on the <SettingsAnchor /> button at the top
                    left of the screen
                </p>
            </div>
        </div>
    );
};

export default UserBanner;
