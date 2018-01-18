import { Component, Input } from '@angular/core';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';



@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  private searchString: string;

  constructor(private queryParamsService: QueryParamsService)  {

  }


  OnSearch() {
    this.queryParamsService.setSearchString( this.searchString);
  }
}

