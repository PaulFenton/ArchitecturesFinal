package spring.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import controller.APIController;
import service.FlowableService;
import service.FlowableServiceImpl;

@SpringBootApplication
@ComponentScan(basePackages = {"controller",
        "service"},
        basePackageClasses = APIController.class)
public class BackEndApplication {
	
	FlowableService flowableService = new FlowableServiceImpl();

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
}
