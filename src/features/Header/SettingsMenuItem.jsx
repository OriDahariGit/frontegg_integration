import React from "react";
import { AdminPortal } from "@frontegg/react";
// Components
import HeaderMenuItem from "./HeaderMenuItem";
import SettingsIcon from "../../components/icons/SettingsIcon";

const handleSettingsBtnClick = () => {
    AdminPortal.openHosted();
};

const changeBgFill = (e) => {
    console.log(`change on: ${e}`);
};

const resetBgFill = (e) => {
    console.log(`change on: ${e}`);
};

// TODO: Copy HeaderMenuItem here!
const SettingsMenuItem = () => {
    return (
        <HeaderMenuItem
            key={0}
            label="Settings"
            Icon={SettingsIcon}
            onClick={handleSettingsBtnClick}
            onMouseEnter={(e) => changeBgFill(e)}
            onMouseLeave={(e) => resetBgFill(e)}
        />
    );
};

export default SettingsMenuItem;
