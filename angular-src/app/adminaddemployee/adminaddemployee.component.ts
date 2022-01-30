import { Component, OnInit } from '@angular/core';
import { Employee } from '../gemployee';
import { Search } from '../gsearch';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-adminaddemployee',
  templateUrl: './adminaddemployee.component.html',
  styleUrls: ['./adminaddemployee.component.css']
})
export class AdminaddemployeeComponent implements OnInit {

  employee: any=new Employee(0,"","","","","","","");
  employees:any;
  search : any=new Search(0);

  constructor(private service : TutionmanagementService) { }

  ngOnInit(): void {
    let resp=this.service.getEmployees();
    resp.subscribe((data)=>this.employees=data);
  }

  public employeeNow(){
    let resp = this.service.postEmployee(this.employee);
    resp.subscribe((data)=>this.employees=data);
  }
  public updateEmployeeNow(){
    let resp = this.service.updateEmployee(this.employee);
    resp.subscribe((data)=>this.employees=data);
  }
  public delEmployee(eid:number){
    let resp=this.service.deleteEmployee(eid);
    resp.subscribe((data)=>this.employees=data);
  }
  public searchById(a:number){
    let resp=this.service.getEmployeeById(a);
    resp.subscribe((data)=>this.employee=data);
  }

}
