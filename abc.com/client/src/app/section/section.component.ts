import {Component, Input, OnInit} from '@angular/core';
import {SectionService} from './section.service';
import {Section} from './section';
import {Sections} from "./sections";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  constructor(private  sectionService: SectionService,
              private sections: Sections ,
              private queryParamsService: QueryParamsService)  {
    this.getSections(null);
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
          this.getSections(queryParam);
        }
      );
  }

  public getSections(queryParams: QueryParams) {
    this.sectionService.getSections(queryParams).subscribe(data => {
      },
    error => {
      console.log(error._body.toString());
    });

  }



  public deleteSection(section: Section) {
    this.sectionService.delete(section.getId()).subscribe(data => {

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

