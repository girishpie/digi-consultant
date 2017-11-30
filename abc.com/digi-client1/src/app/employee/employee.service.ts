import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Employee} from './employee';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Employees} from "./employees";
import {Globals} from "../globals/globals";

@Injectable()
export class EmployeeService {


  private employeeUrl = this.globals.getBackendUrl() +  'employee/';

  constructor(private http: Http, private  employees: Employees, private globals: Globals ) {
  }

  public getEmployees(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.employeeUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const employees: Array<Employee> =  new Array<Employee>();
          for ( i = 0 ; i < response.length ; i++) {
            const employee: Employee = new Employee();
            employee.setFirstname(response[i].firstname);
            employee.setRole(response[i].role);
            employee.setTelephone(response[i].telephone);
            employee.setCompanyName(response[i].companyName);
            employee.setNoOfProjects(response[i].noOfProjects);
            employee.setId(response[i].id);
            employees.push(employee);
          }
          this.employees.setEmployees(employees);
          this.employees.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(employee: Employee)  {
    const endPoint = this.employeeUrl + employee.getCompanyId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // Returns response
    return this.http.post(endPoint, employee, options)
      .map(res => {
          const res1 = res.json();
          employee.setId(res1.id);
          this.employees.addEmployee(employee);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.employeeUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.employees.deleteEmployee(res1.id);
        }
      );
  }
}
