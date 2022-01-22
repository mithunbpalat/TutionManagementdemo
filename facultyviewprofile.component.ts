import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faculty } from '../gfaculty';
import { TutionmanagementService } from '../tutionmanagement.service';

@Component({
  selector: 'app-facultyviewprofile',
  templateUrl: './facultyviewprofile.component.html',
  styleUrls: ['./facultyviewprofile.component.css']
})
export class FacultyviewprofileComponent implements OnInit {

  faculty : any = new Faculty(0,"","","","","","","","","","","","");
  a : any;
  constructor(private service: TutionmanagementService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getFacultyById(this.a);
    respo.subscribe((data)=>this.faculty=data);

  }

}
