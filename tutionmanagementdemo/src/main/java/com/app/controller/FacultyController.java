package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Faculty;
import com.app.service.FacultyService;

@RestController
@CrossOrigin("*")
public class FacultyController {
	@Autowired
	private FacultyService facultyServ;
	
	
	@Bean
	public BCryptPasswordEncoder encode() {
		return new BCryptPasswordEncoder();
	}
	//private BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping(value="postfaculty")
	public List<Faculty> saveFaculty(@RequestBody Faculty faculty){
		System.out.println("Faculty works");
		//PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String pwd = faculty.getFacultypassword();
		String encodedPassword = passwordEncoder.encode(pwd);
		//String encryptPwd=encoder.encode(pwd);
		faculty.setFacultypassword(encodedPassword);
		System.out.println(encodedPassword);
		facultyServ.saveFaculty(faculty);
		return facultyServ.getAllFacultys();
	}
	@PutMapping(value="updatefaculty")
	public List<Faculty> updateStudent(@RequestBody Faculty faculty){
		System.out.println("Faculty update works");
		//PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String pwd = faculty.getFacultypassword();
		String encodedPassword = passwordEncoder.encode(pwd);
		//String encryptPwd=encoder.encode(pwd);
		faculty.setFacultypassword(encodedPassword);
		System.out.println(encodedPassword);
		facultyServ.updateFaculty(faculty);
		return facultyServ.getAllFacultys();
	}
	@GetMapping(value="getallfacultys")
	public List<Faculty> getAllFaculty(){
		return facultyServ.getAllFacultys();
	}
	@DeleteMapping(value="deletefacultybyid")
	public List<Faculty> deleteFaculty(@RequestParam int fid){
		facultyServ.deleteFaculty(fid);
		return facultyServ.getAllFacultys();
	}
	@GetMapping(value="getfacultybyid")
	public Faculty getFacultyById(@RequestParam int fid){
		return facultyServ.findFacultyByFid(fid);
	}
	@PostMapping(value="getfacultybyusername")
	public String getFacultyByUsername(@RequestBody Faculty faculty){
		String s = "1";
		//PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String facultyusername= faculty.getFacultyusername();
		String testpwd = faculty.getFacultypassword();
		System.out.println(testpwd);
		//String testencryptPwd = encoder.encode(testpwd);
		Faculty facu = facultyServ.getFacultyByUsername1(facultyusername);
		String originalpwd = facu.getFacultypassword();
		//stud.setStatus(s);
		System.out.println(originalpwd);
		System.out.println(testpwd);
		
		
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		/*
		String password = "yawinpassword";
		String encodedPassword = passwordEncoder.encode(password);
		System.out.println();
		System.out.println("Password is         : " + password);
		System.out.println("Encoded Password is : " + encodedPassword);
		System.out.println();
		*/
		boolean isPasswordMatch = passwordEncoder.matches(testpwd, originalpwd);
		System.out.println(isPasswordMatch);
		
		
		if (isPasswordMatch) {
			s= "authenticated";
			System.out.println(s);
		}
		return s;
	}
	@GetMapping(value="getfacultybyfacultyusername")
	public Faculty getFacultyByFacultyusername(@RequestParam String facultyusername){
		return facultyServ.findFacultyByFacultyusername(facultyusername);
	}
}

