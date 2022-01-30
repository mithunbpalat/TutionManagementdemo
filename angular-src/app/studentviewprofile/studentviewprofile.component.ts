import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../gstudent';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-studentviewprofile',
  templateUrl: './studentviewprofile.component.html',
  styleUrls: ['./studentviewprofile.component.css']
})
export class StudentviewprofileComponent implements OnInit {

  student : any = new Student(0,"","","","","","","","","","","","","");
  a : any;
  constructor(private service: TutionmanagementService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getStudentById(this.a);
    respo.subscribe((data)=>this.student=data);

  }

}
