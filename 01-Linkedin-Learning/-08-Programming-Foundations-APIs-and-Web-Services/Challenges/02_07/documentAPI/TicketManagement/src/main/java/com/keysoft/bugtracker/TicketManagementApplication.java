package main.java.com.keysoft.bugtracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("main.java.com.keysoft")
public class TicketManagementApplication {

	public static void main(String... args) {
		SpringApplication.run(TicketManagementApplication.class, args);

	}
}
