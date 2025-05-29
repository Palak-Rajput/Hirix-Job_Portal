import { Divider } from "@mantine/core";
import PostedJob from "../Components/PostedJob/PostedJob";
import PostedJobDesc from "../Components/PostedJob/PostedJobDesc";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobPostedBy } from "../Services/JobService";
import axios from "axios";
import React from "react";

const PostedJobPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state: any) => state.user);
  const [jobList, setJobList] = useState<any[]>([]);
  const [job, setJob] = useState<any>({});
  const [applicants, setApplicants] = useState<any[]>([]); // ✅ new state

  useEffect(() => {
    if (!user?.id) return;
    window.scrollTo(0, 0);

    getJobPostedBy(Number(user.id))

      .then((res) => {
        setJobList(res || []);

        if (res && res.length > 0 && (id === undefined || Number(id) === 0)) {
          navigate(`/posted-job/${res[0].id}`);
        }

        const selected = res.find((item: any) => item.id == id);
        if (selected) setJob(selected);
      })
      .catch((err) => {
        console.error("Error loading posted jobs:", err);
      });
  }, [user, id]);

  // 🔁 When job is loaded, fetch applicants
  useEffect(() => {
    if (job?.id) {
      axios
        .get(`http://localhost:8080/jobs/applications/job/${job.id}`)
        .then((res) => {
          setApplicants(res.data || []);
          console.log("Fetched applicants:", res.data);
        })
        .catch((err) => {
          console.error("Error loading applicants:", err);
        });
    }
  }, [job?.id]);

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-4">
      <Divider size="xs" />
      <div className="flex gap-5">
        <PostedJob job={job} jobList={jobList} />
        <PostedJobDesc {...job} applicants={applicants} /> {/* ✅ pass applicants */}
      </div>
    </div>
  );
};

export default PostedJobPage;
