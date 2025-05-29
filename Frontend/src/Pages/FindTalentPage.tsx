import { Divider } from "@mantine/core";
import Talents from "../Components/FindTalent/Talents";
import React from "react";
const FindTalentPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
          
            <Divider size="xs" mx="md" />
            <Talents />
        </div>

    )
}
export default FindTalentPage;