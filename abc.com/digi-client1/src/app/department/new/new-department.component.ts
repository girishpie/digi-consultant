import { Department } from '../department';
import { Departments } from '../departments';
import { DepartmentService } from '../department.service';
import { Project } from '../../project/project';
import { Projects } from '../../project/projects';
import { ProjectService } from '../../project/project.service';

import { Component, Input, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'new-department',
  templateUrl: './new-department.component.html',
  styleUrls: []
})
export class NewDepartmentComponent implements OnInit {
   private availableProjects: Project[];
   private name: string ;
   private projectName: string;

  constructor(private departmentService: DepartmentService, private projectService: ProjectService,
              private departments: Departments, private projects: Projects)  {

  }

  ngOnInit() {
     this.getProjects();
  }

  addNewDepartment() {
    let department: Department = new Department();
    department.setName(this.name);
    department.setProjectName(this.projectName);
    this.departmentService.save(department).subscribe(data => {
        console.log(data);
        department.setId(data);
        this.departments.addDepartment(department);
      jQuery('.modal').modal('toggle');

    }, error => {
      window.alert(error._body);
    });
  }
  
getProjects(){
    this.projectService.getProjects(null).subscribe( data => {
      this.availableProjects = this.projects.getProjects();
    }, error => {
      window.alert(error._body);
    });
  }
}
