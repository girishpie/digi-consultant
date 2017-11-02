import { Class } from '@angular/core';

export class Employee {

  private  id: string;
  private  name: string;
  private  email: string;
  private  skypeId: string;
  private  companyName: string;
  private  companyId: string;

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
  
  public setEmail ( email: string ) {
    this.email = email;
  }
  public getemail (): string {
    return this.email ;
  }
  public setSkypeId ( skypeId: string ) {
    this.skypeId = skypeId;
  }
  public getSkypeId (): string {
    return this.skypeId ;
  }
  public setCompanyName( companyName: string ) {
    this.companyName = companyName;
  }
  public getCompanyName (): string {
    return this.companyName ;
  }
  public setCompanyId( departmentId: string ) {
    this.companyId = departmentId;
  }
  public getCompanyId(): string {
    return this.companyId ;
  }
}
