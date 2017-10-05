/**
 * Created by gipai on 10/4/2017.
 */
import {Injectable} from '@angular/core';
import {QueryParams} from './query-params';
import {Observable} from 'rxjs/Observable';
import {Subject} from "rxjs/Subject";


@Injectable()
export class QueryParamsService {

  private subject = new Subject<any>();
  public queryParams = new QueryParams();

  public setSearchString(searchString: string ) {
    this.queryParams. searchString = searchString;
    this.subject.next(this.queryParams);
  }
  public setPageNumber(page: number) {
    this.queryParams.pageNumber = page;
    this.subject.next(this.queryParams);
  }

  public getQueryParams() {
      return this.subject.asObservable();
  }

}
