import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../Components/TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";
import React from "react";

const TalentProfilePage = () => {
    const navigate=useNavigate();
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">

    <Button onClick={()=>navigate(-1)} my="sm" leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" variant="light">Back</Button>
<div className="flex gap-5">
<Profile {...profile}/>
<RecommendTalent/>
</div>
        </div>

    )
}
export default TalentProfilePage;