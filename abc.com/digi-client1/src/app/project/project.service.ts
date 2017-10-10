import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Project} from './project';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Projects} from "./projects";

@Injectable()
export class ProjectService {


  private userUrl = 'http://localhost:8080/api/project/';

  constructor(private http: Http, private  projects: Projects ) {

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
    let endPoint = this.userUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
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
            project.setStartDate(response[i].startDate);
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
    const endPoint = this.userUrl;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint, project)
      .map(res => {
          const res1 = res.json();
          project.setId(res1.id);
          this.projects.addProject(project);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.userUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.projects.deleteProject(res1.id);
        }
      );
  }
}
