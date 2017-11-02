import { Component, Input, OnInit } from '@angular/core';

import { Company } from '../../company/company';
import { Companies } from '../../company/companies';
import { CompanyService } from '../../company/company.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Employees } from '../employees';

declare var jQuery:any;

@Component({
  selector: 'new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
   private availableCompanies: Company[];
   private name: string ;
   private email: string ;
   private skypeId: string ;
   private companyId: string ;

  constructor(private  employeeService: EmployeeService,private companyService: CompanyService,
              private employees: Employees, private companies: Companies)  {

  }

  ngOnInit() {
    this.getCompanies();
  }
  
  addNewEmployee() {
    let employee: Employee = new Employee();
    employee.setName(this.name);
    employee.setEmail(this.email);
    employee.setSkypeId(this.skypeId);
    employee.setCompanyId(this.companyId);
    this.employeeService.save(employee).subscribe(data => {
        console.log(data);
        employee.setId(data);
        this.employees.addEmployee(employee);
      jQuery('.modal').modal('toggle');

    }, error => {
      window.alert(error._body);
    });
  }
  
  getCompanies() {
    this.companyService.getCompanies(null).subscribe( data => {
      this.availableCompanies = this.companies.getCompanies();
    }, error => {
      window.alert(error._body);
    });
  }
}
