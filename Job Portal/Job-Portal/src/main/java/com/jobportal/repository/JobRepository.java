package com.jobportal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jobportal.entity.Job;

public interface JobRepository extends MongoRepository<Job, Long> {
    List<Job> findByPostedBy(Long id);

    void deleteById(long long1);

    Optional<Job> findById(long long1);
}
