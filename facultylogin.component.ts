import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from '../gfaculty';
import { Search } from '../gsearch';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-facultylogin',
  templateUrl: './facultylogin.component.html',
  styleUrls: ['./facultylogin.component.css']
})
export class FacultyloginComponent implements OnInit {

  msg:any;
  message:any;
  id:any;
  search: any=new Search(0);
  faculty: any=new Faculty(0,"","","","","","","","","","","","");
  test: any=new Faculty(0,"","","","","","","","","","","","");
  constructor(private service: TutionmanagementService, private router: Router) { }

  ngOnInit(): void {
  }

  public searchById(tu:string,tp:string){
    let resp=this.service.getFacultyByUsername(this.test);
    resp.subscribe((data)=>this.message=data);

    let respo = this.service.getFacultyByFacultyusername(tu);
    respo.subscribe((data)=>this.faculty=data);
    this.msg="Check username or password";
    if(tu && tp){
      if( this.message == "authenticated"){
        //(<HTMLInputElement>document.getElementById("demo")).disabled=false;
        //(<HTMLInputElement>document.getElementById("demo")).innerText="LOGIN";
        //(<HTMLInputElement>document.getElementById("demo1")).innerText= "Hello Admin/User Log into your account";
        this.router.navigate(["/facultyprofile/",this.faculty.fid])      
      }
    }
  }
}
