import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Category} from './category';
import {QueryParams} from '../home/query-obeservables/query-params';
import {Categories} from './categories';
import {Globals} from '../globals/globals';

@Injectable()
export class CategoryService {

  private categoryUrl = this.globals.getBackendUrl() +  'category/';

  constructor(private http: Http, private  categories: Categories, private globals: Globals ) {

  }

  public getCategories(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.categoryUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const categories: Array<Category> =  new Array<Category>();
          for ( i = 0 ; i < response.length ; i++) {
            const category: Category = new Category();
            category.setId(response[i].id);
            category.setName(response[i].name);
            category.setDescription(response[i].description);
            category.setSubCategories(response[i].subCatNames);
            categories.push(category);
          }
          this.categories.setCategories(categories);
          this.categories.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }

  public save(category: Category)  {
    const endPoint = this.categoryUrl;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint, category)
      .map(res => {
          const res1 = res.json();
          category.setId(res1.id);
          this.categories.addCategory(category);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.categoryUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.categories.deleteCategory(res1.id);
        }
      );
  }

  public getCategory(name: string): string  {
    this.getCategories(null).subscribe(data => {
      },
    error => {
      window.alert(error._body.errorMessage);
    });
    let i = 0;
    for ( i = 0 ; i < this.categories.getTotalItems() ; i++) {
           if (this.categories[i].getName() === name) {
               return this.categories[i].getId();
             }

     }
  }
}
