import { BoQ } from '../boq';
import { BoQs } from '../boqs';
import { BoQService } from '../boq.service';
import { Department } from '../../department/department';
import { Departments } from '../../department/departments';
import { DepartmentService } from '../../department/department.service';

import { Component, Input, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'new-boq',
  templateUrl: './new-boq.component.html',
  styleUrls: []
})
export class NewBoQComponent implements OnInit {
   private availableDepartments: Department[];
   private boQDepartmentId: string;
   private version: number;
   private totalVersions: number;

  constructor(private departmentService: DepartmentService, private boqService: BoQService,
              private boqs: BoQs, private departments: Departments)  {

  }

  ngOnInit() {
     this.getDepartments();
  }

  addNewBoQ() {
    let boq: BoQ = new BoQ();
    boq.setBoQDepartmentId(this.boQDepartmentId);
    this.boqService.save(boq).subscribe(data => {
        console.log(data);
        boq.setId(data);
        this.boqs.addBoQ(boq);
      jQuery('.modal').modal('toggle');

    }, error => {
      window.alert(error._body);
    });
  }

getDepartments() {
    this.departmentService.getDepartments(null).subscribe( data => {
      this.availableDepartments = this.departments.getDepartments();
    }, error => {
      window.alert(error._body);
    });
  }
}
