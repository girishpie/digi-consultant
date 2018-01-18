import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from './project';
import {Projects} from "./projects";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  constructor(private  projectService: ProjectService,
              private projects: Projects ,
              private queryParamsService: QueryParamsService)  {
    this.getProjects(null);
  }

  ngOnInit() {
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getProjects(queryParam);
        }
      );
  }

  public getProjects(queryParams: QueryParams) {
    this.projectService.getProjects(queryParams).subscribe(data => {
      },
    error => {
      console.log(error._body.toString() + " No projects found");
    });

  }



  public deleteProject(project: Project) {
    this.projectService.delete(project.getId()).subscribe(data => {

    });
  }

  getPage(page: number ){
    this.currentPage= page;
    this.queryParamsService.setPageNumber( page-1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

