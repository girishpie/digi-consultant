import { Class } from '@angular/core';

export class Employee {

  private  id: string;
  private  firstname: string;
  private lastname: string;
  private DOB: Date;
  private gender: string;
  private role: string;
  private address: string;
  private city: string;
  private country: string;
  private mobile: string;
  private  telephone: string;
  private  email: string;
  private  companyName: string;
  private  companyId: string;
  private  noOfProjects: number;
  private projectIds: string[];
  
  constructor() {
  }
  
  public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  
  public setFirstname ( firstname: string ) {
    this.firstname = firstname;
  }
  
  public getFirstname (): string {
    return this.firstname ;
  }
  
   public setLastname ( lastname: string ) {
    this.lastname = lastname;
  }
  
  public getLastname (): string {
    return this.lastname ;
  }
  
   public setDOB ( DOB: Date ) {
    this.DOB = DOB;
  }
  
  public getDOB (): Date {
    return this.DOB ;
  }
  
   public setGender ( gender: string ) {
    this.gender = gender;
  }
  
  public getGender (): string {
    return this.gender ;
  }
  
   public setAddress ( address: string ) {
    this.address = address;
  }
  
  public getAddress (): string {
    return this.address ;
  }
  
   public setCity ( city: string ) {
    this.city = city;
  }
  
  public getCity (): string {
    return this.city ;
  }
  
  public setCountry ( country: string ) {
    this.country = country;
  }
  public getCountry (): string {
    return this.country ;
  }
  public setRole ( role: string ) {
    this.role = role;
  }
  public getRole (): string {
    return this.role ;
  }
  public setTelephone ( telephone: string ) {
    this.telephone = telephone;
  }
  public getTelephone (): string {
    return this.telephone ;
  }
  public setMobile ( mobile: string ) {
    this.mobile = mobile;
  }
  public getMobile (): string {
    return this.mobile ;
  }
  public setEmail ( email: string ) {
    this.email = email;
  }
  public getEmail (): string {
    return this.email ;
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
  public setProjectIds(projectIds: string[] ) {
    this.projectIds = projectIds;
  }
  public getProjectIds(): string[] {
    return this.projectIds ;
  }
  public setNoOfProjects ( noOfProjects: number ) {
    this.noOfProjects = noOfProjects;
  }
  public getNoOfProjects (): number {
    return this.noOfProjects ;
  }
}
