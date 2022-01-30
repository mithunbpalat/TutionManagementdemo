package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer>{

}
