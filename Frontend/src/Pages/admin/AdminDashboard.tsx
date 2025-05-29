import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StatsCard from '../../Components/admin/StatsCard';
import JobTable from '../../Components/admin/JobTable';

interface Stats {
  totalJobs: number;
  totalVisitors: number;
}

interface Job {
  id: number;
  title: string;
  company: string;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<Stats>({ totalJobs: 0, totalVisitors: 0 });
  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchStats = async () => {
    try {
      const res = await axios.get('http://localhost:8080/admin/stats');
      setStats(res.data);
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:8080/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/admin/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error('Error deleting job:', err);
    }
  };

  useEffect(() => {
    fetchStats();
    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatsCard title="Total Jobs" value={stats.totalJobs} />
        <StatsCard title="Total Candidates" value={stats.totalVisitors} />
      </div>
      <JobTable jobs={jobs} onDelete={handleDelete} />
    </div>
  );
};

export default AdminDashboard;
