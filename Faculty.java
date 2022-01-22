package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="faculty",catalog="tutionmanagementdemodatabase")
public class Faculty {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int fid;
    private String name;
    private String address;
    private String email;
    private String course;
    private String phone;
    private String salary;
    private String paymentstatus;
    private String lecturedetails;
    private String facultyusername;
    private String facultypassword;
    private String contractstartdate;
    private String contractrenewaldate;
	public Faculty() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Faculty(int fid, String name, String address, String email, String course, String phone, String salary,
			String paymentstatus, String lecturedetails, String facultyusername, String facultypassword,
			String contractstartdate, String contractrenewaldate) {
		super();
		this.fid = fid;
		this.name = name;
		this.address = address;
		this.email = email;
		this.course = course;
		this.phone = phone;
		this.salary = salary;
		this.paymentstatus = paymentstatus;
		this.lecturedetails = lecturedetails;
		this.facultyusername = facultyusername;
		this.facultypassword = facultypassword;
		this.contractstartdate = contractstartdate;
		this.contractrenewaldate = contractrenewaldate;
	}
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public String getPaymentstatus() {
		return paymentstatus;
	}
	public void setPaymentstatus(String paymentstatus) {
		this.paymentstatus = paymentstatus;
	}
	public String getLecturedetails() {
		return lecturedetails;
	}
	public void setLecturedetails(String lecturedetails) {
		this.lecturedetails = lecturedetails;
	}
	public String getFacultyusername() {
		return facultyusername;
	}
	public void setFacultyusername(String facultyusername) {
		this.facultyusername = facultyusername;
	}
	public String getFacultypassword() {
		return facultypassword;
	}
	public void setFacultypassword(String facultypassword) {
		this.facultypassword = facultypassword;
	}
	public String getContractstartdate() {
		return contractstartdate;
	}
	public void setContractstartdate(String contractstartdate) {
		this.contractstartdate = contractstartdate;
	}
	public String getContractrenewaldate() {
		return contractrenewaldate;
	}
	public void setContractrenewaldate(String contractrenewaldate) {
		this.contractrenewaldate = contractrenewaldate;
	}
    
}
