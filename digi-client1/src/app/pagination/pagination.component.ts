/**
 * Created by gipai on 10/3/2017.
 */
import { Component, Input } from '@angular/core';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';



@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent {

  constructor(private queryParamsService: QueryParamsService)  {

  }

  getPage(page: number ){
    this.queryParamsService.setPageNumber( page-1);
  }
}

