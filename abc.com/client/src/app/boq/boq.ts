import { Class } from '@angular/core';

export class BoQ {

  private  id: string;
  private  projectId: string;
  private  boQDepartmentName: string;
  private  boQDepartmentId: string;
  private  version: number;
  private  totalVersions: number;
  constructor() {
  }
  public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  public setProjectId ( projectId: string ) {
    this.projectId = projectId;
  }
  public getProjectId (): string {
    return this.projectId ;
  }
  public setBoQDepartmentName ( boQDepartmentName: string ) {
    this.boQDepartmentName = boQDepartmentName;
  }
  public getBoQDepartmentName (): string {
    return this.boQDepartmentName ;
  }
   public setBoQDepartmentId ( boQDepartmentId: string ) {
    this.boQDepartmentId = boQDepartmentId;
  }
  public getBoQDepartmentId (): string {
    return this.boQDepartmentId ;
  }
  public setVersion ( version: number ) {
    this.version = version;
  }
  public getVersion (): number {
    return this.version ;
  }
  public setTotalVersions ( totalVersions: number ) {
    this.totalVersions = totalVersions;
  }
  public getTotalVersions (): number {
    return this.totalVersions ;
  }
}
