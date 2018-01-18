import { Class } from '@angular/core';

export class Client {

  private  id: string;
  private  name: string;
  private  companyName: string;
  private  companyId: string;
  private  projectNames: Array<string>;
  private  address: string;

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
  
  public setCompanyName ( companyName: string ) {
    this.companyName = companyName;
  }
  public getCompanyName (): string {
    return this.companyName ;
  }
  public setCompanyId ( companyId: string ) {
    this.companyId = companyId;
  }
  public getCompanyId (): string {
    return this.companyId ;
  }
  public setAddress ( address: string ) {
    this.address = address;
  }
  public getAddress (): string {
    return this.address ;
  }
  public setProjectNames( projectNames: Array<string> ) {
    this.projectNames = projectNames;
  }
  public getProjectNames(): Array<string> {
    return this.projectNames;
  }

}