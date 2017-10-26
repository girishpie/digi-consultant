import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Phase} from './phase';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Phases} from "./phases";
import {Globals} from "../globals/globals";

@Injectable()
export class PhaseService {


  private phaseUrl = this.globals.getBackendUrl() +  'phase/';

  constructor(private http: Http, private  phases: Phases, private globals: Globals ) {

  }

  public getPhases(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.phaseUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const phases: Array<Phase> =  new Array<Phase>();
          for ( i = 0 ; i < response.length ; i++) {
            const phase: Phase = new Phase();
            phase.setName(response[i].name);
            phase.setId(response[i].id);
            phases.push(phase);
          }
          this.phases.setPhases(phases);
          this.phases.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(phase: Phase)  {
    const endPoint = this.phaseUrl;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint, phase)
      .map(res => {
          const res1 = res.json();
          phase.setId(res1.id);
          this.phases.addPhase(phase);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.phaseUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.phases.deletePhase(res1.id);
        }
      );
  }
}
