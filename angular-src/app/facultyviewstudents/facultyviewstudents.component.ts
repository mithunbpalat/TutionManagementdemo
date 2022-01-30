import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faculty } from '../gfaculty';
import { Search } from '../gsearch';
import { Student } from '../gstudent';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-facultyviewstudents',
  templateUrl: './facultyviewstudents.component.html',
  styleUrls: ['./facultyviewstudents.component.css']
})
export class FacultyviewstudentsComponent implements OnInit {

  faculty : any = new Faculty(0,"","","","","","","","","","","","");
  a : any;
  search : any = new Search(0);
  student : any = new Student(0,"","","","","","","","","","","","","");
  students : any;
  constructor(private service: TutionmanagementService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getFacultyById(this.a);
    respo.subscribe((data)=>this.faculty=data);

  }

  public getStudent(a: string){
    let resp = this.service.getStudentsByCourse(a);
    resp.subscribe((data)=>this.students=data); 
  }

  public searchById(a:number){
    let resp = this.service.getStudentById(a);
    resp.subscribe((data)=>this.student=data);
  }
}
