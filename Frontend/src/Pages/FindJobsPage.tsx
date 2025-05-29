import { Divider } from "@mantine/core";
import Jobs from "../Components/FindJobs/Jobs";
import React from "react";

const FindJobs = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
           
            <Divider size="xs" mx="md" />
            <Jobs />
        </div>

    )
}
export default FindJobs;