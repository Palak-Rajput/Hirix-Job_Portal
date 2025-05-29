package com.jobportal.dto;

public class DashboardStatsDTO {
    private long totalJobs;
    private long totalVisitors;

    public DashboardStatsDTO(long totalJobs, long totalVisitors) {
        this.totalJobs = totalJobs;
        this.totalVisitors = totalVisitors;
    }

    public long getTotalJobs() {
        return totalJobs;
    }

    public void setTotalJobs(long totalJobs) {
        this.totalJobs = totalJobs;
    }

    public long getTotalVisitors() {
        return totalVisitors;
    }

    public void setTotalVisitors(long totalVisitors) {
        this.totalVisitors = totalVisitors;
    }
}
