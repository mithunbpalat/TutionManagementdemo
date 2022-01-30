package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Course;
import com.app.service.CourseService;

@RestController
@CrossOrigin("*")
public class CourseController {
	@Autowired
	private CourseService courseServ;
	
	@PostMapping(value="postcourse")
	public List<Course> saveCourse(@RequestBody Course course){
		System.out.println("Course works");
		courseServ.saveCourse(course);
		return courseServ.getAllCourses();
	}
	@PutMapping(value="updatecourse")
	public List<Course> updateCourse(@RequestBody Course course){
		System.out.println("Course update works");
		courseServ.updateCourse(course);
		return courseServ.getAllCourses();
	}
	@GetMapping(value="getallcourses")
	public List<Course> getAllCourse(){
		return courseServ.getAllCourses();
	}
	@DeleteMapping(value="deletecoursebyid")
	public List<Course> deleteCourse(@RequestParam int cid){
		courseServ.deleteCourse(cid);
		return courseServ.getAllCourses();
	}
	@GetMapping(value="getcoursebyid")
	public Course getCourseById(@RequestParam int cid){
		return courseServ.findCourseByCid(cid);
	}
}
