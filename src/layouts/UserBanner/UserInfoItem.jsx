import { useAuth } from "@frontegg/react";
// Components
import UserProfileIcon from "./UserProfileIcon";


const UserInfoItem = () => {
    const { user } = useAuth();

    return (
        <div className="flex h-full w-full flex-col items-center gap-8">
            <UserProfileIcon imageURL={user?.profilePictureUrl} />
            <h2 className="inline-flex text-4xl text-center font-beauty gap-3">
                Hello <span className="inline font-semibold font-frontegg tracking-wide">
                    {user?.name || "User"}
                </span>
            </h2>
            
        </div>
    );
};

export default UserInfoItem;
