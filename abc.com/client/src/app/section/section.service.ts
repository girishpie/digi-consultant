import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Section} from './section';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Sections} from './sections';
import {Globals} from "../globals/globals";

@Injectable()
export class SectionService {


  private sectionUrl = this.globals.getBackendUrl() +  'section/';

  constructor(private http: Http, private  sections: Sections, private globals: Globals ) {

  }

  public getSections(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.sectionUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const sections: Array<Section> =  new Array<Section>();
          for ( i = 0 ; i < response.length ; i++) {
            const section: Section = new Section();
            section.setSectionName(response[i].sectionName);
            section.setSpecificationName(response[i].sepecificationName);
            section.setProductNames(response[i].productNames);
            section.setId(response[i].id);
            sections.push(section);
          }
          this.sections.setSections(sections);
          this.sections.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(section: Section)  {
    const endPoint = this.sectionUrl + section.getBoqId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint, section)
      .map(res => {
          const res1 = res.json();
          section.setId(res1.id);
          this.sections.addSection(section);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.sectionUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.sections.deleteSection(res1.response);
        }
      );
  }
}
