package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student",catalog="tutionmanagementdemodatabase")
public class Student {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int sid;
    private String name;
    private String address;
    private String email;
    private String course;
    private String phone;
    private String totalfees;
    private String paidfees;
    private String balancefees;
    private String fines;
    private String reservationcategorycharges;
    private String feespaymentdate;
    private String studusername;
    private String studpassword;
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(int sid, String name, String address, String email, String course, String phone, String totalfees,
			String paidfees, String balancefees, String fines, String reservationcategorycharges,
			String feespaymentdate, String studusername, String studpassword) {
		super();
		this.sid = sid;
		this.name = name;
		this.address = address;
		this.email = email;
		this.course = course;
		this.phone = phone;
		this.totalfees = totalfees;
		this.paidfees = paidfees;
		this.balancefees = balancefees;
		this.fines = fines;
		this.reservationcategorycharges = reservationcategorycharges;
		this.feespaymentdate = feespaymentdate;
		this.studusername = studusername;
		this.studpassword = studpassword;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
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
	public String getTotalfees() {
		return totalfees;
	}
	public void setTotalfees(String totalfees) {
		this.totalfees = totalfees;
	}
	public String getPaidfees() {
		return paidfees;
	}
	public void setPaidfees(String paidfees) {
		this.paidfees = paidfees;
	}
	public String getBalancefees() {
		return balancefees;
	}
	public void setBalancefees(String balancefees) {
		this.balancefees = balancefees;
	}
	public String getFines() {
		return fines;
	}
	public void setFines(String fines) {
		this.fines = fines;
	}
	public String getReservationcategorycharges() {
		return reservationcategorycharges;
	}
	public void setReservationcategorycharges(String reservationcategorycharges) {
		this.reservationcategorycharges = reservationcategorycharges;
	}
	public String getFeespaymentdate() {
		return feespaymentdate;
	}
	public void setFeespaymentdate(String feespaymentdate) {
		this.feespaymentdate = feespaymentdate;
	}
	public String getStudusername() {
		return studusername;
	}
	public void setStudusername(String studusername) {
		this.studusername = studusername;
	}
	public String getStudpassword() {
		return studpassword;
	}
	public void setStudpassword(String studpassword) {
		this.studpassword = studpassword;
	}
    
}
