import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TutionmanagementService } from './tutionmanagement.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminaddcourseComponent,
    AdminaddemployeeComponent,
    AdminaddfacultyComponent,
    AdminaddstudentComponent,
    AdminclassscheduleComponent,
    AdminloginComponent,
    AdminvieweventComponent,
    AdminviewstudentComponent,
    FacultyloginComponent,
    FacultyviewclassscheduleComponent,
    FacultyviewprofileComponent,
    FacultyviewstudentsComponent,
    StudentloginComponent,
    StudentviewclassscheduleComponent,
    StudentviewprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TutionmanagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
