package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ClassscheduleRepository;
import com.app.model.Classschedule;

@Service
public class ClassscheduleService {
	@Autowired
	private ClassscheduleRepository classscheduleRepo;
	public Classschedule saveClassschedule(Classschedule classschedule) {
		return classscheduleRepo.save(classschedule);
	}
	public Classschedule updateClassschedule(Classschedule classschedule) {
		return classscheduleRepo.save(classschedule);
	}
	public List<Classschedule> getAllClassschedules() {
		return (List<Classschedule>) classscheduleRepo.findAll();
	}
	public void deleteClassschedule(int csid) {
		classscheduleRepo.deleteById(csid);
	}
	public Classschedule findClassscheduleByCsid(int csid) {
		return classscheduleRepo.findById(csid).get();
	}
}