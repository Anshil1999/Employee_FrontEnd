import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http : HttpClient) { }
  public doRegistration(employee){
    return this.http.post("http://localhost:8080/save-employee", employee,{responseType: "text" as "json"});
  }
  public getEmployees(){
    return this.http.get("http://localhost:8080/getAllEmployees");
  }
  public getUserByEmpid(empid){
    return this.http.get("http://localhost:8080/search/"+ empid);
  }
  public deleteEmployee(empid){
    return this.http.get("http://localhost:8080/delete/"+empid);
  }
}
