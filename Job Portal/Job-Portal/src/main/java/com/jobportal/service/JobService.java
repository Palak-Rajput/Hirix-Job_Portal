package com.jobportal.service;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.ApplicationJobDTO;
import com.jobportal.dto.ApplicationStatusUpdateDTO;
import com.jobportal.dto.JobDTO;
import com.jobportal.exception.JobPortalException;

import java.util.List;

public interface JobService {

    // Post a new job
    JobDTO postJob(JobDTO jobDTO) throws JobPortalException;

    // Retrieve all jobs
    List<JobDTO> getAllJobs();

    // Get applications by job ID
    List<ApplicationJobDTO> getApplicationsByJob(Long jobId) throws JobPortalException;

    // Get details of a specific job
    JobDTO getJob(Long id) throws JobPortalException;

    // Apply for a job
    void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException;

    // Get jobs posted by a specific employer
    List<JobDTO> getJobsPostedBy(Long id);

    // Update application status using DTO
    void changeAppStatus(ApplicationStatusUpdateDTO dto) throws JobPortalException;

    // Get all applications submitted by an applicant, with job details
    List<ApplicationJobDTO> getApplicationsByApplicant(Long applicantId);

    // Delete a job by ID
    void deleteJob(Long id) throws JobPortalException;
} 
