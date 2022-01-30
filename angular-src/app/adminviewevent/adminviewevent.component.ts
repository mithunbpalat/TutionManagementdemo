import { Component, OnInit } from '@angular/core';
import { Employee } from '../gemployee';
import { Faculty } from '../gfaculty';
import { Student } from '../gstudent';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-adminviewevent',
  templateUrl: './adminviewevent.component.html',
  styleUrls: ['./adminviewevent.component.css']
})
export class AdminvieweventComponent implements OnInit {

  faculty:any=new Faculty(0,"","","","","","","","","","","","");
  facultys: any;
  employee:any= new Employee(0,"","","","","","","");
  employees:any;
  student: any= new Student(0,"","","","","","","","","","","","","");
  students: any;

  constructor(private service : TutionmanagementService) { }

  ngOnInit(): void {
    let resp = this.service.getEmployees();
    resp.subscribe((data)=>this.employees=data);

    let re = this.service.getFacultys();
    re.subscribe((data)=>this.facultys=data);

    let respo = this.service.getStudents();
    respo.subscribe((data)=>this.students=data);

  }

}
