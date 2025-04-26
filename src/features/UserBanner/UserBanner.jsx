import React, { useEffect, useState } from "react";
import { useAuthUser, AdminPortal } from "@frontegg/react";
// Components
import UserProfileImage from "./UserProfileImage";

const UserBanner = () => {
    const user = useAuthUser();
    const [imageURL, setImageURL] = useState(user?.profilePictureUrl);

    useEffect(() => {
        setImageURL(user?.profilePictureUrl);
    }, [user]);

    return (
        <div
            className="flex flex-col w-full h-full max-w-[400px] max-h-[400px] 
                bg-white p-4 rounded-xl items-center justify-around border-frontegg-accent border-2
                shadow-frontegg-pinkhover shadow-lg backdrop-blur-xl"
        >
            <UserProfileImage imageUrl={imageURL} />
            <h2 className="text-3xl text-center font-frontegg">
                Hello{" "}
                <span className="font-semibold tracking-wide">{user?.name || "User"}</span>
            </h2>
            <div className="inline-flex w-full text-xl text-center font-beauty">
                <p className="inline-block">
                    To enter the <span className="textlink" onClick={() => AdminPortal.openHosted()}> self-service portal </span>
                    , just click on the settings button at the top left corner of this page
                </p>
            </div>
        </div>
    );
};

export default UserBanner;
