import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";
import React from "react";

const CompanyEmployees=()=>{
    return <div className="mt-10 flex flex-wrap gap-10">
    {
        talents.map((talent, index) =>index<6&& <TalentCard applicantId={""} applicationId={""} email={""} website={""} resume={""} CoverLetter={""} key={index} {...talent} />)}
        
    
</div>
}
export default CompanyEmployees;