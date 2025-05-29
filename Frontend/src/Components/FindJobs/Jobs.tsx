import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Sort from "./Sort";
import { getAllJobs } from "../../Services/JobService";
import React from "react";

const Jobs=()=>{
    const [jobList, setJobList]=useState([{}]);
    useEffect(()=>{
        getAllJobs().then((res)=>{
            setJobList(res);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    return <div className="p-5">
    <div className="flex justify-between">
    <div className="text-2xl font-semibold">Recommended Jobs</div>
    <Sort />
    </div>
    <div className="mt-10 flex flex-wrap gap-5">
    {
        jobList.map((job, index) => <JobCard key={index} {...job} />)
    }
    </div>
    </div>
}
export default Jobs;