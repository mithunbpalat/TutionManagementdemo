import { Component, OnInit } from '@angular/core';
import { Course } from '../gcourse';
import { Student } from '../gstudent';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-adminviewstudent',
  templateUrl: './adminviewstudent.component.html',
  styleUrls: ['./adminviewstudent.component.css']
})
export class AdminviewstudentComponent implements OnInit {

  student: any = new Student(0,"","","","","","","","","","","","","");
  students: any;
  course: any = new Course(0,"","","");
  courses : any;
  constructor(private service: TutionmanagementService) { }

  ngOnInit(): void {
    let resp = this.service.getCourses();
    resp.subscribe((data)=>this.courses= data);
  }

  public getStudent(a:string){
    let resp = this.service.getStudentsByCourse(a);
    resp.subscribe((data)=>this.students=data);
  }
}
