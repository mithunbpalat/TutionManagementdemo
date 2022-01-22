import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username: any;
  password: any;
  msg:any;
  message:any;
  constructor(private service: TutionmanagementService, private router: Router) { }

  ngOnInit(): void {
  }

  public searchById(){
    let resp= this.service.login(this.username,this.password);
    resp.subscribe((data)=>this.message=data);
    if(this.message === null){
    this.msg = "Check the Username Or Password";
    }
    if(this.username && this.password ){
      if(this.message == "authenticated successfully"){
      //(<HTMLInputElement>document.getElementById("demo")).disabled=false;
      //(<HTMLInputElement>document.getElementById("demo")).innerText="LOGIN";
      //(<HTMLInputElement>document.getElementById("demo1")).innerText= "Hello Admin/User Log into your account";
      this.router.navigate(["/adminaddfaculty"]);
      }
    }
  }

}
