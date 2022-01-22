import { Component, OnInit } from '@angular/core';
import { Course } from '../gcourse';
import { Search } from '../gsearch';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-adminaddcourse',
  templateUrl: './adminaddcourse.component.html',
  styleUrls: ['./adminaddcourse.component.css']
})
export class AdminaddcourseComponent implements OnInit {

  course: any=new Course(0,"","","");
  courses:any;
  search : any=new Search(0);

  constructor(private service : TutionmanagementService) { }

  ngOnInit(): void {
    let resp=this.service.getCourses();
    resp.subscribe((data)=>this.courses=data);
  }

  public courseNow(){
    let resp = this.service.postCourse(this.course);
    resp.subscribe((data)=>this.courses=data);
  }
  public updateCourseNow(){
    let resp = this.service.updateCourse(this.course);
    resp.subscribe((data)=>this.courses=data);
  }
  public delCourse(cid:number){
    let resp=this.service.deleteCourse(cid);
    resp.subscribe((data)=>this.courses=data);
  }
  public searchById(a:number){
    let resp=this.service.getCourseById(a);
    resp.subscribe((data)=>this.course=data);
  }
}
