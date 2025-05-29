package com.jobportal.service;

import com.jobportal.dto.DashboardStatsDTO;
import com.jobportal.repository.JobRepository;
import com.jobportal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private UserRepository userRepository; // for tracking visitors if needed

    @Override
    public DashboardStatsDTO getDashboardStats() {
        long totalJobs = jobRepository.count();
        long totalVisitors = userRepository.count();
        return new DashboardStatsDTO(totalJobs, totalVisitors);
    }

    @Override
    public void deleteJob(String jobId) {
        jobRepository.deleteById(Long.parseLong(jobId));
    }
}
