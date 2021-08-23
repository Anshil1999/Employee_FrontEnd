import { Component, OnInit } from '@angular/core';
import * as internal from 'assert';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  empid: number;
  employee: any;
  isHided = true;
  constructor(private service: EmployeeServiceService) { }

  ngOnInit() {
    this.isHided = true;
  }

  public findByEmpid(){
    this.isHided = false;
    let response = this.service.getUserByEmpid(this.empid);
    response.subscribe(data => this.employee = data)
  }

}
