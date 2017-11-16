import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';
import {QueryParams} from '../home/query-obeservables/query-params';
import {Products} from './products';
import {Globals} from '../globals/globals';

@Injectable()
export class ProductService {

  private productUrl = this.globals.getBackendUrl() +  'product/';

  constructor(private http: Http, private  products: Products, private globals: Globals ) {

  }

  public getProducts(queryParams: QueryParams, sectionId: string)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.productUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint, sectionId)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const products: Array<Product> =  new Array<Product>();
          for ( i = 0 ; i < response.length ; i++) {
            const product: Product = new Product();
            product.setSectionName(response[i].sectionName);
            product.setProductCatName(response[i].productCatName);
            product.setName(response[i].name);
            product.setQuantity(response[i].quantity);
            product.setBimId(response[i].bimId);
            product.setAmount(response[i].amount);
            product.setUnit(response[i].unit);
            product.setDescription(response[i].description);
            products.push(product);
          }
          this.products.setProducts(products);
          this.products.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }

  public save(product: Product)  {
    const endPoint = this.productUrl + product.getSectionId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint, product)
      .map(res => {
          const res1 = res.json();
          product.setId(res1.id);
          this.products.addProduct(product);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.productUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.products.deleteProduct(res1.id);
        }
      );
  }
}
