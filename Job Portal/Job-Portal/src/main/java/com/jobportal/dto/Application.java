package com.jobportal.dto;

import java.time.LocalDateTime;

import com.jobportal.dto.ApplicationStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Application {
    private String applicationId;   // ✅ this maps MongoDB _id
    private Long jobId;
    private String jobTitle;
    private Long applicantId;
    private LocalDateTime interviewTime;
    private ApplicationStatus applicationStatus;

    // Optional constructor to build from entity
    public Application(com.jobportal.entity.Application app) {
        this.applicationId = app.getId(); // mapping _id from entity
        this.jobId = app.getJobId();
        this.jobTitle = app.getJobTitle();
        this.applicantId = app.getApplicantId();
        this.interviewTime = app.getInterviewTime();
        this.applicationStatus = app.getApplicationStatus();
    }
} 
