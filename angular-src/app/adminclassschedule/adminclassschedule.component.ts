import { Component, OnInit } from '@angular/core';
import { Classschedule } from '../gschedule';
import { Search } from '../gsearch';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-adminclassschedule',
  templateUrl: './adminclassschedule.component.html',
  styleUrls: ['./adminclassschedule.component.css']
})
export class AdminclassscheduleComponent implements OnInit {

  classschedule : any=new Classschedule(0,"","","","","","","","","","","");
  classschedules:any;
  search : any=new Search(0);

  constructor(private service : TutionmanagementService) { }

  ngOnInit(): void {
    let resp=this.service.getClassschedules();
    resp.subscribe((data)=>this.classschedules=data);
  }

  public classscheduleNow(){
    let resp = this.service.postClassschedule(this.classschedule);
    resp.subscribe((data)=>this.classschedules=data);
  }
  public updateClassscheduleNow(){
    let resp = this.service.updateClassschedule(this.classschedule);
    resp.subscribe((data)=>this.classschedules=data);
  }
  public delClassschedule(csid:number){
    let resp=this.service.deleteClassschedule(csid);
    resp.subscribe((data)=>this.classschedules=data);
  }
  public searchById(a:number){
    let resp=this.service.getClassscheduleById(a);
    resp.subscribe((data)=>this.classschedule=data);
  }

  
}
