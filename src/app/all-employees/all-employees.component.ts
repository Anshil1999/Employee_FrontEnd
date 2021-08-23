import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent implements OnInit {

  employee: any;
  
  constructor(private service: EmployeeServiceService) { }

  ngOnInit() {
    let response = this.service.getEmployees();
    response.subscribe(data => this.employee = data);
  }
  public removeEmployee(empid: number){
    let response = this.service.deleteEmployee(empid);
    response.subscribe(data => this.employee = data);
  }


}
