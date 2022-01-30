import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminaddcourseComponent } from './adminaddcourse/adminaddcourse.component';
import { AdminaddemployeeComponent } from './adminaddemployee/adminaddemployee.component';
import { AdminaddfacultyComponent } from './adminaddfaculty/adminaddfaculty.component';
import { AdminaddstudentComponent } from './adminaddstudent/adminaddstudent.component';
import { AdminclassscheduleComponent } from './adminclassschedule/adminclassschedule.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminvieweventComponent } from './adminviewevent/adminviewevent.component';
import { AdminviewstudentComponent } from './adminviewstudent/adminviewstudent.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';
import { FacultyviewclassscheduleComponent } from './facultyviewclassschedule/facultyviewclassschedule.component';
import { FacultyviewprofileComponent } from './facultyviewprofile/facultyviewprofile.component';
import { FacultyviewstudentsComponent } from './facultyviewstudents/facultyviewstudents.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentviewclassscheduleComponent } from './studentviewclassschedule/studentviewclassschedule.component';
import { StudentviewprofileComponent } from './studentviewprofile/studentviewprofile.component';

const routes: Routes = [
  {path:"",redirectTo:"adminlogin",pathMatch:"full"},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"facultylogin",component:FacultyloginComponent},
  {path:"studentlogin",component:StudentloginComponent},
  {path:"adminaddfaculty",component:AdminaddfacultyComponent},
  {path:"adminaddstudent",component:AdminaddstudentComponent},
  {path:"adminaddcourse",component:AdminaddcourseComponent},
  {path:"adminviewstudent",component:AdminviewstudentComponent},
  {path:"adminviewevent",component:AdminvieweventComponent},
  {path:"addemployee",component:AdminaddemployeeComponent},
  {path:"adminscheduleclass",component:AdminclassscheduleComponent},
  {path:"facultyprofile/:id",component:FacultyviewprofileComponent},
  {path:"facultyviewstudents/:id",component:FacultyviewstudentsComponent},
  {path:"facultyviewclassschedule/:id",component:FacultyviewclassscheduleComponent},
  {path:"studentprofile/:id",component:StudentviewprofileComponent},
  {path:"studentviewclassschedule/:id",component:StudentviewclassscheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
