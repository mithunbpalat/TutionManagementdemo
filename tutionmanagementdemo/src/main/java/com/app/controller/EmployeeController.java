package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Employee;
import com.app.service.EmployeeService;

@RestController
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeServ;
	
	@PostMapping(value="postemployee")
	public List<Employee> saveEmployee(@RequestBody Employee employee){
		System.out.println("Employee works");
		employeeServ.saveEmployee(employee);
		return employeeServ.getAllEmployees();
	}
	@PutMapping(value="updateemployee")
	public List<Employee> updateEmployee(@RequestBody Employee employee){
		System.out.println("Employee update works");
		employeeServ.updateEmployee(employee);
		return employeeServ.getAllEmployees();
	}
	@GetMapping(value="getallemployees")
	public List<Employee> getAllEmployee(){
		return employeeServ.getAllEmployees();
	}
	@DeleteMapping(value="deleteemployeebyid")
	public List<Employee> deleteEmployee(@RequestParam int eid){
		employeeServ.deleteEmployee(eid);
		return employeeServ.getAllEmployees();
	}
	@GetMapping(value="getemployeebyid")
	public Employee getEmployeeById(@RequestParam int eid){
		return employeeServ.findEmployeeByEid(eid);
	}
}
