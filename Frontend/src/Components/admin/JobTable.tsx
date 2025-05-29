import React from "react";

type Job = {
  id: number;
  title: string;
  company: string;
};

type JobTableProps = {
  jobs: Job[];
  onDelete: (id: number) => void;
};

const JobTable: React.FC<JobTableProps> = ({ jobs, onDelete }) => (
  <table className="w-full bg-white rounded shadow">
    
    <tbody>
      {jobs.map((job) => (
        <tr key={job.id}>
          <td className="p-2 border">{job.title}</td>
          <td className="p-2 border">{job.company}</td>
          <td className="p-2 border text-center">
            <button onClick={() => onDelete(job.id)} className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default JobTable;
