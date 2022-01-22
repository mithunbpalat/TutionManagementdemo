package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="classschedule",catalog="tutionmanagementdemodatabase")
public class Classschedule {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int csid;
    private String dateofschedule;
    private String dayofschedule;
    private String period1;
    private String period2;
    private String period3;
    private String period4;
    private String period5;
    private String period6;
    private String period7;
    private String period8;
    private String period9;
	public Classschedule() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Classschedule(int csid, String dateofschedule, String dayofschedule, String period1, String period2,
			String period3, String period4, String period5, String period6, String period7, String period8,
			String period9) {
		super();
		this.csid = csid;
		this.dateofschedule = dateofschedule;
		this.dayofschedule = dayofschedule;
		this.period1 = period1;
		this.period2 = period2;
		this.period3 = period3;
		this.period4 = period4;
		this.period5 = period5;
		this.period6 = period6;
		this.period7 = period7;
		this.period8 = period8;
		this.period9 = period9;
	}
	public int getCsid() {
		return csid;
	}
	public void setCsid(int csid) {
		this.csid = csid;
	}
	public String getDateofschedule() {
		return dateofschedule;
	}
	public void setDateofschedule(String dateofschedule) {
		this.dateofschedule = dateofschedule;
	}
	public String getDayofschedule() {
		return dayofschedule;
	}
	public void setDayofschedule(String dayofschedule) {
		this.dayofschedule = dayofschedule;
	}
	public String getPeriod1() {
		return period1;
	}
	public void setPeriod1(String period1) {
		this.period1 = period1;
	}
	public String getPeriod2() {
		return period2;
	}
	public void setPeriod2(String period2) {
		this.period2 = period2;
	}
	public String getPeriod3() {
		return period3;
	}
	public void setPeriod3(String period3) {
		this.period3 = period3;
	}
	public String getPeriod4() {
		return period4;
	}
	public void setPeriod4(String period4) {
		this.period4 = period4;
	}
	public String getPeriod5() {
		return period5;
	}
	public void setPeriod5(String period5) {
		this.period5 = period5;
	}
	public String getPeriod6() {
		return period6;
	}
	public void setPeriod6(String period6) {
		this.period6 = period6;
	}
	public String getPeriod7() {
		return period7;
	}
	public void setPeriod7(String period7) {
		this.period7 = period7;
	}
	public String getPeriod8() {
		return period8;
	}
	public void setPeriod8(String period8) {
		this.period8 = period8;
	}
	public String getPeriod9() {
		return period9;
	}
	public void setPeriod9(String period9) {
		this.period9 = period9;
	}
    
}
