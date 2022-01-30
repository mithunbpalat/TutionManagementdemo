package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.FacultyRepository;
import com.app.model.Faculty;

@Service
public class FacultyService {
	@Autowired
	private FacultyRepository facultyRepo;
	public Faculty saveFaculty(Faculty faculty) {
		return facultyRepo.save(faculty);
	}
	public Faculty updateFaculty(Faculty faculty) {
		return facultyRepo.save(faculty);
	}
	public List<Faculty> getAllFacultys() {
		return (List<Faculty>) facultyRepo.findAll();
	}
	public void deleteFaculty(int fid) {
		facultyRepo.deleteById(fid);
	}
	public Faculty findFacultyByFid(int fid) {
		return facultyRepo.findById(fid).get();
	}
	public Faculty getFacultyByUsername1(String facultyusername) {
		return facultyRepo.findByFacultyusername(facultyusername);
	}
	public Faculty findFacultyByFacultyusername(String facultyusername) {
		//String username = facultyusername;
		return facultyRepo.findByFacultyusername(facultyusername);
	}
	
}
