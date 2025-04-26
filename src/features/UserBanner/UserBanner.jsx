import React, { useEffect, useState, useContext } from "react";
import { useAuthUser, AdminPortal } from "@frontegg/react";
// Components
import { SettingsHoverContext } from "../../contexts/SettingsHoverContext";
import UserProfileImage from "./UserProfileImage";

const UserBanner = () => {
    const user = useAuthUser();
    const [imageURL, setImageURL] = useState(user?.profilePictureUrl);
    const { setIsAnchorHovered } = useContext(SettingsHoverContext)

    useEffect(() => {
        setImageURL(user?.profilePictureUrl);
    }, [user]);

    const AnchorText = () => {
        return (
            <span 
                className="textlink" 
                onClick={() => AdminPortal.openHosted()}
                onMouseEnter={() => setIsAnchorHovered(true)}
                onMouseLeave={() => setIsAnchorHovered(false)}
            >
                Settings
            </span>
        )
    }

    return (
        <div
            className="flex flex-col w-full h-full max-w-[500px] max-h-[400px] 
                bg-white p-4 rounded-xl items-center justify-around border-frontegg-accent border-2
                shadow-frontegg-pinkhover shadow-lg backdrop-blur-xl"
        >
            <UserProfileImage imageUrl={imageURL} />
            <h2 className="text-3xl text-center font-frontegg">
                Hello{" "}
                <span className="font-semibold tracking-wide">{user?.name || "User"}</span>
            </h2>
                <p className="inline-block w-full pt-[1rem] px-3 text-xl text-center font-numan">
                    To enter the <i>Self-service Portal</i>, click on the {<AnchorText />} button at the top left corner of this page
                </p>
        </div>
    );
};

export default UserBanner;
