import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './gcourse';
import { Employee } from './gemployee';
import { Faculty } from './gfaculty';
import { Classschedule } from './gschedule';
import { Student } from './gstudent';

@Injectable({
  providedIn: 'root'
})
export class TutionmanagementService {

  constructor(private http: HttpClient) { }





  
  public postFaculty(faculty: Faculty){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postfaculty",faculty,{headers,responseType:'text' as 'json'});
  }
  public updateFaculty(faculty: Faculty){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updatefaculty",faculty,{headers,responseType:'text' as 'json'});
  }
  public getFacultys(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallfacultys",{headers});
  }
  public getFacultyByFacultyusername(a:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getfacultybyfacultyusername?facultyusername="+a,{headers});
  }
  public getFacultyById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getfacultybyid?fid="+a,{headers});
  }
  public deleteFaculty(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletefacultybyid?fid="+a,{headers});
  }
  public getFacultyByUsername(faculty: Faculty){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/getfacultybyusername",faculty,{headers,responseType:'text' as 'json'});
  }







  
  public postStudent(student: Student){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/poststudent",student,{headers,responseType:'text' as 'json'});
  }
  public updateStudent(student: Student){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updatestudent",student,{headers,responseType:'text' as 'json'});
  }
  public getStudents(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallstudents",{headers});
  }
  public getStudentsByCourse(a: string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getstudentsbycourse?course="+a,{headers});
  }
  public getStudentByStudusername(a:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getstudentbystudusername?studusername="+a,{headers});
  }
  public getStudentById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getstudentbyid?sid="+a,{headers});
  }
  public deleteStudent(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletestudentbyid?sid="+a,{headers});
  }
  public getStudentByUsername(student: Student){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/getstudentbyusername",student,{headers,responseType:'text' as 'json'});
  }






  
  public postCourse(course: Course){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postcourse",course,{headers,responseType:'text' as 'json'});
  }
  public updateCourse(course: Course){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updatecourse",course,{headers,responseType:'text' as 'json'});
  }
  public getCourses(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallcourses",{headers});
  }
  public getCourseById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getcoursebyid?cid="+a,{headers});
  }
  public deleteCourse(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletecoursebyid?cid="+a,{headers});
  }









  public postEmployee(employee: Employee){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postemployee",employee,{headers,responseType:'text' as 'json'});
  }
  public updateEmployee(employee: Employee){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateemployee",employee,{headers,responseType:'text' as 'json'});
  }
  public getEmployees(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallemployees",{headers});
  }
  public getEmployeeById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getemployeebyid?eid="+a,{headers});
  }
  public deleteEmployee(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteemployeebyid?eid="+a,{headers});
  }







  
  public postClassschedule(classschedule: Classschedule){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postclassschedule",classschedule,{headers,responseType:'text' as 'json'});
  }
  public updateClassschedule(classschedule: Classschedule){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateclassschedule",classschedule,{headers,responseType:'text' as 'json'});
  }
  public getClassschedules(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallclassschedules",{headers});
  }
  public getClassscheduleById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getclassschedulebyid?csid="+a,{headers});
  }
  public deleteClassschedule(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteclassschedulebyid?csid="+a,{headers});
  }







  public login(username:string,password:string){
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/",{headers,responseType:'text' as 'json'});
  }
  public getUsers(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getUsers",{headers});
  }


}
