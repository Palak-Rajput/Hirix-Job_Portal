package com.jobportal.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jobportal.entity.User;

public interface UserRepository extends MongoRepository<User, String>{
    public Optional<User> findByEmail(String email);
     boolean existsByEmail(String email);
}
