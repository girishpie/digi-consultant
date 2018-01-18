import { Class } from '@angular/core';

export class Company {

  private  id: string;
  private  companyName: string;
  private  address: string;
  private  employeeNames: Array<string>;
  private  clientNames: Array<string>;
  private  officeNames: Array<string>;

  constructor() {
  }
  public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
   public setAddress ( address: string ) {
    this.address = address;
  }
  public getAddress (): string {
    return this.address ;
  }
  public setCompanyName ( companyName: string ) {
    this.companyName = companyName;
  }
  
  public getCompanyName (): string {
    return this.companyName ;
  }
  public setEmployeeNames( employeeNames: Array<string> ) {
    this.employeeNames = employeeNames;
  }
  public getEmployeeNames(): Array<string> {
    return this.employeeNames;
  }
  public setClientNames( clientNames: Array<string> ) {
    this.clientNames = clientNames;
  }
  public getClientNames(): Array<string> {
    return this.clientNames;
  }
  public setOfficeNames( officeNames: Array<string> ) {
    this.officeNames = officeNames;
  }
  public getOfficeNames(): Array<string> {
    return this.officeNames;
  }
 }
