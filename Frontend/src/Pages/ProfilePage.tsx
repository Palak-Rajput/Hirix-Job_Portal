import { Divider } from "@mantine/core";
import Profile from "../Components/Profile/Profile";
import React from "react";

const ProfilePage = () => {
    return <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins'] ">
            <Divider mx="md" mb="xl"/>
            <Profile/>
        </div>
    
};

export default ProfilePage;
