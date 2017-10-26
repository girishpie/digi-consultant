import { Class } from '@angular/core';

export class Department {

  private  id: string;
  private  companyName: string;
  private  name: string;
  private  employeeNames: Array<string>;
 
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
  public setEmployeeNames( employeeNames: Array<string> ) {
    this.employeeNames = employeeNames;
  }
  
  public getEmployeeNames(): Array<string> {
    return this.employeeNames;
  }
 
 }
