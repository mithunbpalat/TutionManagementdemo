import { Component, OnInit } from '@angular/core';
import { Search } from '../gsearch';
import { Student } from '../gstudent';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-adminaddstudent',
  templateUrl: './adminaddstudent.component.html',
  styleUrls: ['./adminaddstudent.component.css']
})
export class AdminaddstudentComponent implements OnInit {

  student: any=new Student(0,"","","","","","","","","","","","","");
  students:any;
  search : any=new Search(0);

  constructor(private service : TutionmanagementService) { }

  ngOnInit(): void {
    let resp=this.service.getStudents();
    resp.subscribe((data)=>this.students=data);
  }

  public studentNow(){
    let resp = this.service.postStudent(this.student);
    resp.subscribe((data)=>this.students=data);
  }
  public updateStudentNow(){
    let resp = this.service.updateStudent(this.student);
    resp.subscribe((data)=>this.students=data);
  }
  public delStudent(sid:number){
    let resp=this.service.deleteStudent(sid);
    resp.subscribe((data)=>this.students=data);
  }
  public searchById(a:number){
    let resp=this.service.getStudentById(a);
    resp.subscribe((data)=>this.student=data);
  }
  

}
