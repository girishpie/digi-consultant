import {Component, Input, OnInit} from '@angular/core';
import {DepartmentService} from './department.service';
import {Department} from './department';
import {Departments} from "./departments";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})

export class DepartmentComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  constructor(private departmentService: DepartmentService,
              private departments: Departments ,
              private queryParamsService: QueryParamsService)  {
    this.getDepartments(null);
  }

  ngOnInit() {
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getDepartments(queryParam);
        }
      );
  }

  public getDepartments(queryParams: QueryParams) {
    this.departmentService.getDepartments(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body.errorMessage);
    });

  }



  public deleteDepartment(department: Department) {
    this.departmentService.delete(department.getId()).subscribe(data => {

    });
  }

  getPage(page: number ){
    this.currentPage= page;
    this.queryParamsService.setPageNumber( page-1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

