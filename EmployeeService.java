package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.EmployeeRepository;
import com.app.model.Employee;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepo;
	public Employee saveEmployee(Employee employee) {
		return employeeRepo.save(employee);
	}
	public Employee updateEmployee(Employee employee) {
		return employeeRepo.save(employee);
	}
	public List<Employee> getAllEmployees() {
		return (List<Employee>) employeeRepo.findAll();
	}
	public void deleteEmployee(int eid) {
		employeeRepo.deleteById(eid);
	}
	public Employee findEmployeeByEid(int eid) {
		return employeeRepo.findById(eid).get();
	}
}
