package com.jobportal.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.ApplicationJobDTO;
import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.ApplicationStatusUpdateDTO;
import com.jobportal.dto.JobDTO;
import com.jobportal.dto.ApplicationStatus;
import com.jobportal.entity.Application;
import com.jobportal.entity.Applicant;
import com.jobportal.entity.Job;
import com.jobportal.exception.JobPortalException;
import com.jobportal.repository.ApplicationRepository;
import com.jobportal.repository.JobRepository;
import com.jobportal.utility.Utilities;

@Service("jobService")
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private ApplicationRepository applicationRepository;

    @Override
    public List<ApplicationJobDTO> getApplicationsByApplicant(Long applicantId) {
        List<Application> applications = applicationRepository.findByApplicantId(applicantId);
        List<ApplicationJobDTO> result = new ArrayList<>();

        for (Application app : applications) {
            Job job = jobRepository.findById(app.getJobId()).orElse(null);
            if (job == null) continue;

            ApplicationJobDTO dto = mapToDto(app, job);
            result.add(dto);
        }
        return result;
    }

    @Override
    public void deleteJob(Long id) throws JobPortalException {
        Job job = jobRepository.findById(id)
            .orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));

        jobRepository.delete(job);
    }

    @Override
    public List<ApplicationJobDTO> getApplicationsByJob(Long jobId) throws JobPortalException {
        List<Application> applications = applicationRepository.findByJobId(jobId);
        List<ApplicationJobDTO> result = new ArrayList<>();

        for (Application app : applications) {
            Job job = jobRepository.findById(app.getJobId()).orElse(null);
            if (job == null) continue;

            ApplicationJobDTO dto = mapToDto(app, job);
            result.add(dto);
        }
        return result;
    }

    private ApplicationJobDTO mapToDto(Application app, Job job) {
        ApplicationJobDTO dto = new ApplicationJobDTO();
        dto.setApplicationId(app.getId());
        dto.setJobId(job.getId());
        dto.setJobTitle(job.getJobTitle());
        dto.setCompany(job.getCompany());
        dto.setExperience(job.getExperience());
        dto.setJobType(job.getJobType());
        dto.setLocation(job.getLocation());
        dto.setAbout(job.getAbout());
        dto.setPostTime(job.getPostTime().toString());
        dto.setPackageOffered(job.getPackageOffered());
        dto.setApplicationStatus(app.getApplicationStatus().toString());
        if (app.getInterviewTime() != null) {
            dto.setInterviewTime(app.getInterviewTime().toString());
        }
        return dto;
    }

    @Override
    public JobDTO postJob(JobDTO jobDTO) throws JobPortalException {
        jobDTO.setId(Utilities.getNextSequence("jobs"));
        jobDTO.setPostTime(LocalDateTime.now());
        return jobRepository.save(jobDTO.toEntity()).toDTO();
    }

    @Override
    public List<JobDTO> getAllJobs() {
        return jobRepository.findAll().stream().map(Job::toDTO).toList();
    }

    @Override
    public JobDTO getJob(Long id) throws JobPortalException {
        return jobRepository.findById(id)
                .orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"))
                .toDTO();
    }

    @Override
    public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND"));

        List<Applicant> applicants = job.getApplicants();
        if (applicants == null) applicants = new ArrayList<>();

        boolean alreadyApplied = applicants.stream()
                .anyMatch(x -> x.getApplicantId().equals(applicantDTO.getApplicantId()));
        if (alreadyApplied) throw new JobPortalException("JOB_APPLIED_ALREADY");

        applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);
        applicants.add(applicantDTO.toEntity());
        job.setApplicants(applicants);
        jobRepository.save(job);

        Application app = new Application();
        app.setApplicantId(applicantDTO.getApplicantId());
        app.setJobId(id);
        app.setJobTitle(job.getJobTitle());
        app.setApplicationStatus(ApplicationStatus.APPLIED);
        app.setInterviewTime(LocalDateTime.now().plusDays(2));
        applicationRepository.save(app);
    }

    @Override
    public List<JobDTO> getJobsPostedBy(Long id) {
        return jobRepository.findByPostedBy(id).stream().map(Job::toDTO).toList();
    }

    @Override
    public void changeAppStatus(ApplicationStatusUpdateDTO dto) throws JobPortalException {
        Application application = applicationRepository.findById(dto.getApplicationId())
                .orElseThrow(() -> new JobPortalException("APPLICATION_NOT_FOUND"));

        application.setApplicationStatus(dto.getNewStatus());

        if (dto.getNewStatus() == ApplicationStatus.INTERVIEWING) {
            if (dto.getScheduleDate() == null) {
                throw new JobPortalException("Schedule date is required for INTERVIEWING status");
            }
            try {
                LocalDateTime scheduledDate = LocalDateTime.parse(dto.getScheduleDate(), java.time.format.DateTimeFormatter.ISO_DATE_TIME);

                application.setInterviewTime(scheduledDate);
            } catch (DateTimeParseException e) {
                throw new JobPortalException("Invalid schedule date format");
            }
        }

        applicationRepository.save(application);
    }
}
