import { Tabs } from "@mantine/core";
import { activeJobs } from "../../Data/PostedJob";
import PostedJobCard from "./PostedJobCard";
import { useEffect, useState } from "react";
import React from "react";

const PostedJob = (props:any) => {
  const [activeTab, setActiveTab]=useState<string | null>('ACTIVE')
  useEffect(()=>{
    setActiveTab(props.job?.jobStatus||'ACTIVE');
  }, [props.job])
    return <div className="w-1/5">
        <div className="text-2xl font-semibold mb-5">Jobs</div>
<div>
<Tabs autoContrast variant="pills" value={activeTab} onChange={setActiveTab}>
      <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
        <Tabs.Tab value="ACTIVE">Active [{props.jobList?.filter((job:any)=>job?.jobStatus=="ACTIVE").length}]</Tabs.Tab>
        {/* <Tabs.Tab value="draft">Drafts [1]</Tabs.Tab> */}
      </Tabs.List>

      <Tabs.Panel value="ACTIVE"> 
        <div className="flex flex-col gap-5 mt-5">
          {
            props.jobList?.filter((job:any)=>job?.jobStatus==activeTab).map((item:any, index:any)=><PostedJobCard key={index} {...item}/>)
          }
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="draft">Second panel</Tabs.Panel>
    </Tabs>
</div>
    </div>
}
export default PostedJob;