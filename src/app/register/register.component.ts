import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  employee: Employee = new Employee(0,"","",0,0);
  message: any;

  constructor(private service : EmployeeServiceService) { }

  ngOnInit() {
  }
  public registerNow(){
    let response = this.service.doRegistration(this.employee);
    response.subscribe(data => {
      this.message = data;
    })
  }

}
