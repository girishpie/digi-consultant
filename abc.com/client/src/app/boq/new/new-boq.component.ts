import { BoQ } from '../boq';
import { BoQs } from '../boqs';
import { BoQService } from '../boq.service';
import { BoQComponent } from '../boq.component';
import { Department } from '../../department/department';
import { Departments } from '../../department/departments';
import { DepartmentService } from '../../department/department.service';
import {StateService } from '@uirouter/angular';
import { Component, Input, OnInit } from '@angular/core';

//declare var jQuery:any;
const boqState = { name: 'boq', url: '/boq',  component: BoQComponent };

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
              private boqs: BoQs, private departments: Departments,  public stateService: StateService)  {

  }

  ngOnInit() {
     this.getDepartments();
  }

  addNewBoQ() {
    let boq: BoQ = new BoQ();
    boq.setBoQDepartmentId(this.boQDepartmentId);
    this.boqService.save(boq).subscribe(data => {
        console.log(data);
       // boq.setId(data);
        //this.boqs.addBoQ(boq);
      this.stateService.go('boq');

    }, error => {
      window.alert(error._body);
    });
  }

  getDepartments() {
    this.departmentService.getDepartments(null).subscribe( data => {
      this.availableDepartments = this.departments.getDepartments();
    }, error => {
       console.log(error._body.toString() + " No Departments found");
    });
  }
  
  goBack() {
    window.history.back();
  }
}
