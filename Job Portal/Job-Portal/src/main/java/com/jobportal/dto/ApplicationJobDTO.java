package com.jobportal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationJobDTO {
    private Long jobId;
    private String jobTitle;
    private String company;
    private String experience;
    private String jobType;
    private String location;
    private String about;
    private String postTime;
    private Long packageOffered;
    private String applicationId;
    private String applicationStatus;
    private String interviewTime;
}
