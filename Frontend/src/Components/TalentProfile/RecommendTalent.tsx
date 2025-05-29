import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";
import React from "react";

const RecommendTalent=()=>{
    return <div>
        <div className="text-xl font-semibold mb-5">Recommended Talent</div>
        <div className="flex flex-col flex-wrap gap-5">
{
    talents.map((talent, index) =>index<4 && <TalentCard applicantId={""} applicationId={""} email={""} website={""} resume={""} CoverLetter={""} key={index} {...talent} />)
}
        </div>
    </div>
}
export default RecommendTalent;