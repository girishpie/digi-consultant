import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Subcategory} from './subcategory';
import {QueryParams} from '../home/query-obeservables/query-params';
import {Subcategories} from './subcategories';
import {Globals} from '../globals/globals';

@Injectable()
export class SubcategoryService {

  private categoryUrl = this.globals.getBackendUrl() +  'category/';

  constructor(private http: Http, private  subcategories: Subcategories, private globals: Globals ) {

  }

  public getSubcategories(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.categoryUrl + 'subCategory' +'?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const subcategories: Array<Subcategory> =  new Array<Subcategory>();
          for ( i = 0 ; i < response.length ; i++) {
            const subcategory: Subcategory = new Subcategory();
            subcategory.setName(response[i].name);
            subcategory.setDescription(response[i].description);
            subcategory.setParentName(response[i].parentName);
            subcategories.push(subcategory);
          }
          this.subcategories.setSubcategories(subcategories);
          this.subcategories.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }

  public save(subcategory: Subcategory)  {
    const endPoint = this.categoryUrl +  subcategory.getCategoryId() + '/';
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint, subcategory)
      .map(res => {
          const res1 = res.json();
          subcategory.setId(res1.id);
          this.subcategories.addSubcategory(subcategory);
          return res1.id;
        }
      );
  }

  public delete(id: string, parentId: string)  {
    const endPoint = this.categoryUrl  + parentId + '/' + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.subcategories.deleteSubcategory(res1.id);
        }
      );
  }
}
