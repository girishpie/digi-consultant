import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Department} from './department';
import {QueryParams} from '../home/query-obeservables/query-params';
import {Departments} from './departments';
import {Globals} from '../globals/globals';

@Injectable()
export class DepartmentService {


  private departmentUrl = this.globals.getBackendUrl() +  'boqdepartment/';

  constructor(private http: Http, private  departments: Departments, private globals: Globals ) {

  }

  public getDepartments(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.departmentUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const departments: Array<Department> =  new Array<Department>();
          for ( i = 0 ; i < response.length ; i++) {
            const department: Department = new Department();
            department.setName(response[i].boqDepartmentName);
            department.setProjectName(response[i].projectName);
            department.setId(response[i].id);
            departments.push(department);
          }
          this.departments.setDepartments(departments);
          this.departments.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(department: Department)  {
    const endPoint = this.departmentUrl + department.getProjectId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint, department)
      .map(res => {
          const res1 = res.json();
          department.setId(res1.id);
          this.departments.addDepartment(department);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.departmentUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.departments.deleteDepartment(res1.id);
        }
      );
  }
}
