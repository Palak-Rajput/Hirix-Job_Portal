import { talents } from "../../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import React from "react";


const Talents=()=>{
    return <div className="p-5">
    <div className="flex justify-between">
    <div className="text-2xl font-semibold">Talents</div>
    <Sort />
    </div>
    <div className="mt-10 flex flex-wrap gap-5 justify-between">
        {
            talents.map((talent, index) => <TalentCard applicantId={""} applicationId={""} email={""} website={""} resume={""} CoverLetter={""} key={index} {...talent} />)}
            
        
    </div>
    </div>
}
export default Talents;