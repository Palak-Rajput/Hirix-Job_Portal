import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DreamJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // You can customize this to match your routing structure
    navigate(`/find-jobs?title=${encodeURIComponent(jobTitle)}&type=${encodeURIComponent(jobType)}`);
  };

  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find your <span>dream</span> <span>job</span> with us
        </div>
        <div className="text-lg text-mine-shaft-200">
          Good life begins with a good company. Start explore thousands of jobs in one place.
        </div>
        <div className="flex gap-3 mt-5">
          <TextInput
            value={jobTitle}
            onChange={(e) => setJobTitle(e.currentTarget.value)}
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            value={jobType}
            onChange={(e) => setJobType(e.currentTarget.value)}
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Job Type"
            placeholder="Fulltime"
          />

          <div
            onClick={handleSearch}
            className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer"
          >
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>

      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[30rem] relative">
          <img src="/boy.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
