package main.java.com.keysoft.bugtracker.repositories;

import main.java.com.keysoft.bugtracker.domain.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {
}
