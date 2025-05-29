import {
  Button,
  Divider,
  FileInput,
  NumberInput,
  rem,
  Textarea,
  TextInput,
  LoadingOverlay,
} from "@mantine/core";
import ApplicationForm from "./ApplicationForm";
import { timeAgo } from "../../Services/Utilities";
import React from "react";

interface ApplyJobCompProps {
  id: number;
  jobTitle: string;
  company: string;
  postTime: string;
  applicants?: any[];
}

const ApplyJobComp: React.FC<ApplyJobCompProps> = ({
  id,
  jobTitle,
  company,
  postTime,
  applicants,
}) => {
  return (
    <div className="w-2/3 mx-auto">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14" src={`/Icons/${company}.png`} alt={company} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl">{jobTitle}</div>
            <div className="text-lg text-mine-shaft-300">
              {company} &bull; {timeAgo(postTime)} &bull;{" "}
              {applicants ? applicants.length : 0} Applicants
            </div>
          </div>
        </div>
      </div>

      <Divider my="xl" />

      {/* ✅ jobId passed as number */}
      <ApplicationForm jobId={id} />
    </div>
  );
};

export default ApplyJobComp;
