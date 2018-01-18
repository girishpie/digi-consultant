import {Injectable} from "@angular/core";
import {Project} from "./project";


@Injectable()
export class Projects {

  private  projects: Array<Project> = new Array<Project>();
  private  totalItems:number;

  public setProjects (projects : Array<Project>) {
    this.projects = projects;
  }
  public getProjects() : Array<Project> {
    return this.projects;
  }

  public addProject(project: Project) {
    this.projects.push(project);
    this.totalItems++;
  }

  public deleteProject(projectName: string) {
    let projectFound: Project = this.projects.find(project => projectName === project.getProjectName());
    const index: number = this.projects.indexOf(projectFound);
    if (index !== -1) {
      this.projects.splice(index, 1);
      this.totalItems--;
    }
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
