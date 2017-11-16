import {Component, Input, OnInit} from '@angular/core';
import {BoQService} from './boq.service';
import {BoQ} from './boq';
import {BoQs} from "./boqs";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";

@Component({
  selector: 'boq',
  templateUrl: './boq.component.html',
  styleUrls: ['./boq.component.scss']
})

export class BoQComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  constructor(private boqService: BoQService,
              private boqs: BoQs,
              private queryParamsService: QueryParamsService)  {
    this.getBoQs(null);
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
          this.getBoQs(queryParam);
        }
      );
  }

  public getBoQs(queryParams: QueryParams) {
    this.boqService.getBoQs(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body.errorMessage);
    });

  }

  public deleteBoQ(boq: BoQ) {
    this.boqService.delete(boq.getId()).subscribe(data => {

    });
  }

  getPage(page: number ) {
    this.currentPage = page;
    this.queryParamsService.setPageNumber( page - 1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

