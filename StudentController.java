package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
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

import com.app.model.Student;
import com.app.service.StudentService;

@RestController
@CrossOrigin("*")
public class StudentController {
	@Autowired
	private StudentService studentServ;
	/*
	@Bean
	public BCryptPasswordEncoder encode() {
		return new BCryptPasswordEncoder();
	}*/
	//private BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping(value="poststudent")
	public List<Student> saveStudent(@RequestBody Student student){
		System.out.println("Student works");
		//PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String pwd = student.getStudpassword();
		String encodedPassword = passwordEncoder.encode(pwd);
		//String encryptPwd=encoder.encode(pwd);
		student.setStudpassword(encodedPassword);
		System.out.println(encodedPassword);
		studentServ.saveStudent(student);
		return studentServ.getAllStudents();
	}
	@PutMapping(value="updatestudent")
	public List<Student> updateStudent(@RequestBody Student student){
		System.out.println("Student update works");
		//PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String pwd = student.getStudpassword();
		String encodedPassword = passwordEncoder.encode(pwd);
		//String encryptPwd=encoder.encode(pwd);
		student.setStudpassword(encodedPassword);
		System.out.println(encodedPassword);
		studentServ.updateStudent(student);
		return studentServ.getAllStudents();
	}
	@GetMapping(value="getallstudents")
	public List<Student> getAllStudent(){
		return studentServ.getAllStudents();
	}
	@GetMapping(value="getstudentsbycourse")
	public List<Student> getStudentByCourse(@RequestParam String course){
		return studentServ.getStudentByCourse(course);
	}
	
	@DeleteMapping(value="deletestudentbyid")
	public List<Student> deleteStudent(@RequestParam int sid){
		studentServ.deleteStudent(sid);
		return studentServ.getAllStudents();
	}
	@GetMapping(value="getstudentbyid")
	public Student getStudentById(@RequestParam int sid){
		return studentServ.findStudentBySid(sid);
	}
	@PostMapping(value="getstudentbyusername")
	public String getStudentByUsername(@RequestBody Student student){
		String s = "1";
		//PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String studusername= student.getStudusername();
		String testpwd = student.getStudpassword();
		System.out.println(testpwd);
		//String testencryptPwd = encoder.encode(testpwd);
		Student stud = studentServ.getStudentByUsername(studusername);
		String originalpwd = stud.getStudpassword();
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
	@GetMapping(value="getstudentbystudusername")
	public Student getStudentByStudusername(@RequestParam String studusername){
		return studentServ.findStudentByStudentusername(studusername);
	}
}

