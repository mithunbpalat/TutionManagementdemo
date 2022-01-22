package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class TutionmanagementdemoApplication {
	
	@GetMapping("/")
	public String login(){
		return "authenticated successfully" ;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(TutionmanagementdemoApplication.class, args);
	}

}
