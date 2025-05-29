package com.jobportal.dto;

import com.jobportal.dto.ApplicationStatus;

public class ApplicationStatusUpdateDTO {
    private String applicationId; // _id from Mongo, stays String
    private ApplicationStatus newStatus;
    private String scheduleDate; // ISO format date string

    public String getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(String applicationId) {
        this.applicationId = applicationId;
    }

    public ApplicationStatus getNewStatus() {
        return newStatus;
    }

    public void setNewStatus(ApplicationStatus newStatus) {
        this.newStatus = newStatus;
    }

    public String getScheduleDate() {
        return scheduleDate;
    }

    public void setScheduleDate(String scheduleDate) {
        this.scheduleDate = scheduleDate;
    }
}
