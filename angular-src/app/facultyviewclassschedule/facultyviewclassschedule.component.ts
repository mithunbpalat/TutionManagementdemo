import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faculty } from '../gfaculty';
import { Classschedule } from '../gschedule';
import { Search } from '../gsearch';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-facultyviewclassschedule',
  templateUrl: './facultyviewclassschedule.component.html',
  styleUrls: ['./facultyviewclassschedule.component.css']
})
export class FacultyviewclassscheduleComponent implements OnInit {

  faculty : any = new Faculty(0,"","","","","","","","","","","","");
  a : any;
  search : any = new Search(0);
  classschedule : any = new Classschedule(0,"","","","","","","","","","","");
  classschedules : any;
  constructor(private service: TutionmanagementService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getFacultyById(this.a);
    respo.subscribe((data)=>this.faculty=data);

    let resp=this.service.getClassschedules();
    resp.subscribe((data)=>this.classschedules=data);
  }


  public searchById(a:number){
    let resp=this.service.getClassscheduleById(a);
    resp.subscribe((data)=>this.classschedule=data);
  }

}
