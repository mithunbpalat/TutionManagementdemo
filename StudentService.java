package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.StudentRepository;
import com.app.model.Student;

@Service
public class StudentService {
	@Autowired
	private StudentRepository studentRepo;
	public Student saveStudent(Student student) {
		return studentRepo.save(student);
	}
	public Student updateStudent(Student student) {
		return studentRepo.save(student);
	}
	public List<Student> getAllStudents() {
		return (List<Student>) studentRepo.findAll();
	}
	public List<Student> getStudentByCourse(String course) {
		return (List<Student>) studentRepo.findByCourse(course);
	}
	public void deleteStudent(int sid) {
		studentRepo.deleteById(sid);
	}
	public Student findStudentBySid(int sid) {
		return studentRepo.findById(sid).get();
	}
	public Student getStudentByUsername(String username) {
		return studentRepo.findByStudusername(username);
	}
	public Student findStudentByStudentusername(String username) {
		return studentRepo.findByStudusername(username);
	}
	
}
