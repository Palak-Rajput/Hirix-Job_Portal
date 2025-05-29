package com.jobportal;

import com.jobportal.entity.User;
import com.jobportal.dto.AccountType;
import com.jobportal.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class JobPortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(JobPortalApplication.class, args);
    }

    @Bean
    public CommandLineRunner createDefaultAdmin(UserRepository userRepository) {
        return args -> {
            String adminEmail = "admin@hirixx.com";
            if (!userRepository.existsByEmail(adminEmail)) {
                User admin = new User();
                admin.setEmail(adminEmail);
                admin.setPassword(new BCryptPasswordEncoder().encode("Hirix@098"));
                admin.setRole("ADMIN");

                // ✅ Set a valid AccountType — required field
                admin.setAccountType(AccountType.USER); // or AccountType.RECRUITER if preferred

                userRepository.save(admin);
                System.out.println("✅ Default admin user created.");
            } else {
                System.out.println("ℹ️ Admin already exists.");
            }
        };
    }
}
