import { Class } from '@angular/core';

export class Project {

  private  id: string;
  private  projectName: string;
  private  jobNumber: string;
  private  siteAddress: string;
  private  description: string;
  private  startDate: Date;
  private  clientName: string;
  

  constructor() {
  }
  
   public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  
  public setProjectName ( projectName: string ) {
    this.projectName = projectName;
  }
  
  public getProjectName (): string {
    return this.projectName ;
  }
  
  public setJobNumber ( jobNumber: string ) {
    this.jobNumber = jobNumber;
  }
  public getJobNumber (): string {
    return this.jobNumber ;
  }
  public setSiteAddress ( siteAddress: string ) {
    this.siteAddress = siteAddress;
  }
  public getSiteAddress (): string {
    return this.siteAddress ;
  }
  public setDescription( description: string ) {
    this.description = description;
  }
  public getDescription (): string {
    return this.description ;
  }
  public setStartDate ( startDate: Date ) {
    this.startDate = startDate;
  }
  public getStartDate (): Date {
    return this.startDate ;
  }
  public setClientName( clientName: string ) {
    this.clientName = clientName;
  }
  public getClientName (): string {
    return this.clientName ;
  }
  
}