package com.jobportal.repository;

import com.jobportal.entity.Application;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepository extends MongoRepository<Application, String> {

    List<Application> findByApplicantId(Long applicantId);

    List<Application> findByJobId(Long jobId);
}
