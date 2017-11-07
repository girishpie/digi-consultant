import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Document} from './document';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Documents} from "./documents";
import {Globals} from "../globals/globals";

@Injectable()
export class DocumentService {

  private documentUrl = this.globals.getBackendUrl() +  'document/';

  constructor(private http: Http, private  documents: Documents, private globals: Globals ) {

  }

  public getDocuments(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.documentUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const documents: Array<Document> =  new Array<Document>();
          for ( i = 0 ; i < response.length ; i++) {
            const document: Document = new Document();
            document.setDisplayName(response[i].displayName);
            document.setProjectName(response[i].projectName);
            document.setCreatedBy(response[i].createdBy);
            document.setVersion(response[i].version);
            document.setCreationTime(response[i].creationTime);
            document.setId(response[i].id);
            documents.push(document);
          }
          this.documents.setDocuments(documents);
          this.documents.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(event: any, document: Document)  {
    const endPoint = this.documentUrl + document.getProjectId();
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('file', file, file.name);
      return this.http.post(endPoint, formData )
      .map(res => {
          const res1 = res.json();
          document.setId(res1.response.id);
          this.documents.addDocument(document);
          return res1.id;
        }
      );
    }
  }

  public delete(id: string)  {
    const endPoint = this.documentUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.documents.deleteDocument(res1.id);
        }
      );
  }
}
