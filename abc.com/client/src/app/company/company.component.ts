import {Component, Input, OnInit} from '@angular/core';
import {CompanyService} from './company.service';
import {Company} from './company';
import {Companies} from "./companies";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})

export class CompanyComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  constructor(private  companyService: CompanyService,
              private companies: Companies ,
              private queryParamsService: QueryParamsService)  {
    this.getCompanies(null);
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
          this.getCompanies(queryParam);
        }
      );
  }

  public getCompanies(queryParams: QueryParams) {
    this.companyService.getCompanies(queryParams).subscribe(data => {
      },
    error => {
       console.log(error._body.toString());
    });

  }



  public deleteCompany(company: Company) {
    this.companyService.delete(company.getId()).subscribe(data => {

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

