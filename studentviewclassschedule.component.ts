import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classschedule } from '../gschedule';
import { Search } from '../gsearch';
import { Student } from '../gstudent';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-studentviewclassschedule',
  templateUrl: './studentviewclassschedule.component.html',
  styleUrls: ['./studentviewclassschedule.component.css']
})
export class StudentviewclassscheduleComponent implements OnInit {

  student : any = new Student(0,"","","","","","","","","","","","","");
  a : any;
  search : any = new Search(0);
  classschedule : any = new Classschedule(0,"","","","","","","","","","","");
  classschedules : any;
  constructor(private service: TutionmanagementService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getStudentById(this.a);
    respo.subscribe((data)=>this.student=data);

    let resp= this.service.getClassschedules();
    resp.subscribe((data)=>this.classschedules=data);
  }

  public searchById(a:number){
    let resp= this.service.getClassscheduleById(a);
    resp.subscribe((data)=>this.classschedule=data);
  }
}
