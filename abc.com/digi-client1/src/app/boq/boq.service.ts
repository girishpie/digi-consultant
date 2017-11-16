import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {BoQ} from './boq';
import {QueryParams} from "../home/query-obeservables/query-params";
import {BoQs} from "./boqs";
import {Globals} from "../globals/globals";

@Injectable()
export class BoQService {

  private boqUrl = this.globals.getBackendUrl() +  'boq/';

  constructor(private http: Http, private  boqs: BoQs, private globals: Globals ) {

  }

  public getBoQs(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.boqUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const boqs: Array<BoQ> =  new Array<BoQ>();
          for ( i = 0 ; i < response.length ; i++) {
            const boq: BoQ = new BoQ();
            boq.setProjectId(response[i].projectId);
            boq.setBoQDepartmentName(response[i].departmentName);
            boq.setVersion(response[i].version);
            boq.setTotalVersions(response[i].totalVersions);
            boq.setId(response[i].id);
            boqs.push(boq);
          }
          this.boqs.setBoQs(boqs);
          this.boqs.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }

  public save(boq: BoQ)  {
    const endPoint = this.boqUrl + boq.getBoQDepartmentId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint, boq)
      .map(res => {
          const res1 = res.json();
          boq.setId(res1.id);
          this.boqs.addBoQ(boq);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.boqUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.boqs.deleteBoQ(res1.id);
        }
      );
  }
}
