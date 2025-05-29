import axios from "axios";

const base_url = "http://localhost:8080/jobs/";

// Create Job
const postJob = async (job: any) => {
  return axios
    .post(`${base_url}post`, job)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

// Get All Jobs
const getAllJobs = async () => {
  return axios
    .get(`${base_url}getAll`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

// Get Job by ID
const getJob = async (id: number) => {
  return axios
    .get(`${base_url}get/${id}`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

// Apply for a Job
const applyJob = async (id: number, applicant: any) => {
  return axios
    .post(`${base_url}apply/${id}`, applicant)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

// Get Jobs Posted by a User
const getJobPostedBy = async (id: number) => {
  return axios
    .get(`${base_url}postedBy/${id}`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

// Change Application Status
const changeAppStatus = async (application: any) => {
  return axios
    .post(`${base_url}changeAppStatus`, application)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

// Get Applications by Job ID
const getApplicationsByJob = async (jobId: number) => {
  return axios
    .get(`${base_url}applications/job/${jobId}`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

// Get Applications by Applicant ID
const getApplicationsByApplicant = async (applicantId: number) => {
  return axios
    .get(`${base_url}applications/${applicantId}`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

// Delete Job
const deleteJob = async (id: number) => {
  return axios
    .delete(`${base_url}delete/${id}`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

export {
  postJob,
  getAllJobs,
  getJob,
  applyJob,
  getJobPostedBy,
  changeAppStatus,
  getApplicationsByJob,
  getApplicationsByApplicant,
  deleteJob,
};
