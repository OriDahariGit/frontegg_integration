// Components
import UserInfoItem from "./UserInfoItem";
import UserWelcom from "./UserWelcom";
import WaveSVG from "@/assets/waving-hand.svg"



const UserBanner = () => {    


    return (
        <div
            className="flex flex-col w-full h-full max-w-[500px] max-h-[500px] 
                    bg-white/95 p-4 rounded-lg items-center justify-evenly gap-6
                    shadow-frontegg-dark/20 border-[0.5px] border-black/20 shadow-xl
                    relative"
        >
            <UserInfoItem />
            <img className="w-10 aspect-square" src={WaveSVG} />
            <UserWelcom />
        </div>
    );
};

export default UserBanner;
