package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Faculty;

@Repository
public interface FacultyRepository extends JpaRepository<Faculty, Integer>{

	Faculty findByFacultyusername(String facultyusername);
}
