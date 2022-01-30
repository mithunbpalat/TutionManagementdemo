import { Component, OnInit } from '@angular/core';
import { Faculty } from '../gfaculty';
import { Search } from '../gsearch';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-adminaddfaculty',
  templateUrl: './adminaddfaculty.component.html',
  styleUrls: ['./adminaddfaculty.component.css']
})
export class AdminaddfacultyComponent implements OnInit {

  faculty: any=new Faculty(0,"","","","","","","","","","","","");
  facultys:any;
  search : any=new Search(0);

  constructor(private service : TutionmanagementService) { }

  ngOnInit(): void {
    let resp=this.service.getFacultys();
    resp.subscribe((data)=>this.facultys=data);
  }

  public facultyNow(){
    let resp = this.service.postFaculty(this.faculty);
    resp.subscribe((data)=>this.facultys=data);
  }
  public updateFacultyNow(){
    let resp = this.service.updateFaculty(this.faculty);
    resp.subscribe((data)=>this.facultys=data);
  }
  public delFaculty(fid:number){
    let resp=this.service.deleteFaculty(fid);
    resp.subscribe((data)=>this.facultys=data);
  }
  public searchById(a:number){
    let resp=this.service.getFacultyById(a);
    resp.subscribe((data)=>this.faculty=data);
  }

}
