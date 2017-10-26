import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Company} from './company';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Companies} from "./companies";
import {Globals} from "../globals/globals";

@Injectable()
export class CompanyService {


  private companyUrl = this.globals.getBackendUrl() +  'company/';

  constructor(private http: Http, private  companies: Companies, private globals: Globals ) {

  }

  public getCompanies(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.companyUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const companies: Array<Company> =  new Array<Company>();
          for ( i = 0 ; i < response.length ; i++) {
            const company: Company = new Company();
            company.setCompanyName(response[i].companyName);
            company.setAddress(response[i].address);
            company.setDepartmentNames(response[i].departmentNames);
            company.setClientNames(response[i].clientNames);
            company.setOfficeNames(response[i].officeNames);
            company.setId(response[i].id);
            companies.push(company);
          }
          this.companies.setCompanies(companies);
          this.companies.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(company: Company)  {
    const endPoint = this.companyUrl;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint, company)
      .map(res => {
          const res1 = res.json();
          company.setId(res1.id);
          this.companies.addCompany(company);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.companyUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.companies.deleteCompany(res1.id);
        }
      );
  }
}
