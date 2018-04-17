package spring.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackEndApplication {
	
	FlowableService flowableService = new FlowableServiceImpl();

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
}
