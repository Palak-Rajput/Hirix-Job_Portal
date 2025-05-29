package com.jobportal.service;

import com.jobportal.dto.DashboardStatsDTO;

public interface AdminService {
    DashboardStatsDTO getDashboardStats();
    void deleteJob(String jobId);
}