package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="employee",catalog="tutionmanagementdemodatabase")
public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int eid;
    private String empname;
    private String address;
    private String empdesignation;
    private String phone;
    private String salary;
    private String paymentstatus;
    private String date;
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Employee(int eid, String empname, String address, String empdesignation, String phone, String salary,
			String paymentstatus, String date) {
		super();
		this.eid = eid;
		this.empname = empname;
		this.address = address;
		this.empdesignation = empdesignation;
		this.phone = phone;
		this.salary = salary;
		this.paymentstatus = paymentstatus;
		this.date = date;
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getEmpname() {
		return empname;
	}
	public void setEmpname(String empname) {
		this.empname = empname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmpdesignation() {
		return empdesignation;
	}
	public void setEmpdesignation(String empdesignation) {
		this.empdesignation = empdesignation;
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
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
    
}
