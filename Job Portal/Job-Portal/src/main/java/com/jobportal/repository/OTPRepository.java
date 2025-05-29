package com.jobportal.repository;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.jobportal.entity.OTP;
import java.time.LocalDateTime;


public interface OTPRepository extends MongoRepository<OTP, String>{
    List<OTP> findByCreationTimeBefore(LocalDateTime expiry);
}
