package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course",catalog="tutionmanagementdemodatabase")
public class Course {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int cid;
    private String coursename;
    private String courseduration;
    private String coursefees;
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Course(int cid, String coursename, String courseduration, String coursefees) {
		super();
		this.cid = cid;
		this.coursename = coursename;
		this.courseduration = courseduration;
		this.coursefees = coursefees;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	public String getCourseduration() {
		return courseduration;
	}
	public void setCourseduration(String courseduration) {
		this.courseduration = courseduration;
	}
	public String getCoursefees() {
		return coursefees;
	}
	public void setCoursefees(String coursefees) {
		this.coursefees = coursefees;
	}
    
}
