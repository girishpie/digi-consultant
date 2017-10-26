import { Department } from '../department';
import { Departments } from '../departments';
import { DepartmentService } from '../department.service';

import { Component, Input, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'new-department',
  templateUrl: './new-department.component.html',
  styleUrls: []
})
export class NewDepartmentComponent implements OnInit {

   private companyName: string ;
   private name: string ;


  constructor(private departmentService: DepartmentService,
              private departments: Departments)  {

  }

  ngOnInit() {
  }
  
  addNewDepartment() {
    
    let department: Department = new Department();
    department.setName(this.name);
    department.setCompanyName(this.companyName);
    this.departmentService.save(department).subscribe(data => {
        console.log(data);
        department.setId(data);
        this.departments.addDepartment(department);
      jQuery('.modal').modal('toggle');

    }, error => {
      window.alert(error._body);
    });


  }
}
