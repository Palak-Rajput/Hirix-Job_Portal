import { useNavigate, useParams } from "react-router-dom";
import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import ApplyJobComp from "../Components/ApplyJob/ApplyJobComp";
import { useState, useEffect } from "react";
import { getJob } from "../Services/JobService";
import React from "react";

const ApplyJobPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!id || isNaN(Number(id))) {
      console.error("Invalid job ID from URL:", id);
      setError(true);
      return;
    }

    getJob(Number(id)) // ✅ Convert string to number
      .then((res) => {
        console.log("Fetched job:", res);
        setJob(res);
      })
      .catch((err) => {
        console.error("Error loading job:", err);
        setError(true);
      });
  }, [id]);

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Divider size="xs" />
      <Button
        my="md"
        leftSection={<IconArrowLeft size={20} />}
        color="brightSun.4"
        onClick={() => navigate(-1)}
        variant="light"
      >
        Back
      </Button>

      {error ? (
        <div className="text-red-500">❌ Failed to load job details. Please try again later.</div>
      ) : job?.id ? (
        <ApplyJobComp
          id={job.id}
          jobTitle={job.jobTitle}
          company={job.company}
          postTime={job.postTime}
          applicants={job.applicants}
        />
      ) : (
        <div className="text-white">Loading job details...</div>
      )}
    </div>
  );
};

export default ApplyJobPage;
