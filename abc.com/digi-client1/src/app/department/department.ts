import { Class } from '@angular/core';

export class Department {

  private  id: string;
  private  name: string;
  private  projectName: string;
  private projectId: string;
  
  constructor() {
  }
  
   public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
   public setName ( name: string ) {
    this.name = name;
  }
  public getName (): string {
    return this.name ;
  }
  public setProjectName ( projectName: string ) {
    this.projectName = projectName;
  }
  
  public getProjectName (): string {
    return this.projectName ;
  }
  public setProjectId ( projectId: string ) {
    this.projectId = projectId;
  }
  
  public getProjectId (): string {
    return this.projectId ;
  }
 }
