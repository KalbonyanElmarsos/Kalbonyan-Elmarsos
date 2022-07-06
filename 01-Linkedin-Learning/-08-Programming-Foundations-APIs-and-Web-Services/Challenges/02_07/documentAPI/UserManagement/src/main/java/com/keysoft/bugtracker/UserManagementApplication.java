package main.java.com.keysoft.bugtracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("main.java.com.keysoft")
public class UserManagementApplication {

	public static void main(String... args) {
		SpringApplication.run(UserManagementApplication.class, args);

	}
}
