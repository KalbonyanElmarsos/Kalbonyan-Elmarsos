package main.java.com.keysoft.bugtracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@ComponentScan("main.java.com.keysoft")
public class ApplicationCatalogApplication {

	public static void main(String... args) {
		SpringApplication.run(ApplicationCatalogApplication.class, args);

	}
}
