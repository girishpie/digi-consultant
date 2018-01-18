import { Class } from '@angular/core';

export class Document {

  private  id: string;
  private  displayName: string;
  private  projectName: string;
  private  projectId: string;
  private  createdBy: string;
  private  version: number;
  private  creationTime: Date;

  constructor() {
  }

   public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  public setDisplayName ( name: string ) {
    this.displayName = name;
  }
  public getDisplayName(): string {
    return this.displayName ;
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
  public setCreatedBy ( createdBy: string ) {
    this.createdBy = createdBy;
  }
  public getCreatedBy (): string {
    return this.createdBy ;
  }
  public setVersion ( version: number ) {
    this.version = version;
  }
  public getVersion (): number {
    return this.version ;
  }
  public setCreationTime( creationTime: Date ) {
    this.creationTime = creationTime;
  }
  public getCreationTime(): Date {
    return this.creationTime;
  }
}
