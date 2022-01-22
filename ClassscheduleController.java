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

import com.app.model.Classschedule;
import com.app.service.ClassscheduleService;

@RestController
@CrossOrigin("*")
public class ClassscheduleController {
	@Autowired
	private ClassscheduleService classscheduleServ;
	
	@PostMapping(value="postclassschedule")
	public List<Classschedule> saveClassschedule(@RequestBody Classschedule classschedule){
		System.out.println("Classschedule works");
		classscheduleServ.saveClassschedule(classschedule);
		return classscheduleServ.getAllClassschedules();
	}
	@PutMapping(value="updateclassschedule")
	public List<Classschedule> updateClassschedule(@RequestBody Classschedule classschedule){
		System.out.println("Classschedule update works");
		classscheduleServ.updateClassschedule(classschedule);
		return classscheduleServ.getAllClassschedules();
	}
	@GetMapping(value="getallclassschedules")
	public List<Classschedule> getAllClassschedule(){
		return classscheduleServ.getAllClassschedules();
	}
	@DeleteMapping(value="deleteclassschedulebyid")
	public List<Classschedule> deleteClassschedule(@RequestParam int csid){
		classscheduleServ.deleteClassschedule(csid);
		return classscheduleServ.getAllClassschedules();
	}
	@GetMapping(value="getclassschedulebyid")
	public Classschedule getClassscheduleById(@RequestParam int csid){
		return classscheduleServ.findClassscheduleByCsid(csid);
	}
}
