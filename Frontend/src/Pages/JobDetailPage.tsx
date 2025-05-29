import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";
import Job from "../Components/JobDesc/Job";
import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";

const JobDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id || isNaN(Number(id))) {
      console.error("Invalid job ID:", id);
      setError(true);
      return;
    }

    getJob(Number(id))
      .then((res) => setJob(res))
      .catch((err) => {
        console.error("Failed to fetch job:", err);
        setError(true);
      });
  }, [id]);

  if (error)
    return (
      <div className="text-red-500 text-center mt-10 px-4">
        ❌ Job not found.
      </div>
    );

  return job ? (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4 md:px-10">
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

      {/* Job Description Section */}
      <div className="w-full md:w-11/12 lg:w-3/4 mx-auto">
        <Job {...job} />
      </div>
    </div>
  ) : (
    <div className="text-white text-center mt-10 px-4">Loading job...</div>
  );
};

export default JobDetailPage;
