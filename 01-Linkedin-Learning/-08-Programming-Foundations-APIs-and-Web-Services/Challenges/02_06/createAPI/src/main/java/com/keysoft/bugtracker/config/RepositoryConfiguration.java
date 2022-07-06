package com.keysoft.bugtracker.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableAutoConfiguration
@EntityScan(basePackages = {"com.keysoft.bugtracker.domain"})
@EnableJpaRepositories(basePackages = {"com.keysoft.bugtracker.repositories"})
@EnableTransactionManagement
public class RepositoryConfiguration {
}
