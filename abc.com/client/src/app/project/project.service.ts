import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Project} from './project';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Projects} from "./projects";
import {Globals} from "../globals/globals";

@Injectable()
export class ProjectService {


  private projectUrl = this.globals.getBackendUrl() +  'project/';

  constructor(private http: Http, private  projects: Projects, private globals: Globals ) {

  }

  public getProjects(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.projectUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const projects: Array<Project> =  new Array<Project>();
          for ( i = 0 ; i < response.length ; i++) {
            const project: Project = new Project();
            project.setProjectName(response[i].projectName);
            project.setJobNumber(response[i].jobNumber);
            project.setSiteAddress(response[i].siteAddress);
            project.setDescription(response[i].description);
            project.setStartDate(new Date(response[i].startDate));
            project.setClientName(response[i].clientName);
            project.setId(response[i].id);
            projects.push(project);
          }
          this.projects.setProjects(projects);
          this.projects.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(project: Project)  {
    const endPoint = this.projectUrl + project.getClientId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // Returns response
    return this.http.post(endPoint, project, options)
      .map(res => {
          const res1 = res.json();
          project.setId(res1.id);
          this.projects.addProject(project);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.projectUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.projects.deleteProject(res1.response);
        }
      );
  }
}
