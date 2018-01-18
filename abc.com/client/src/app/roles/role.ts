/**
 * Created by gipai on 10/3/2017.
 */
import { Class } from '@angular/core';



export class Role {

  public  id: string;
  public  name: string;
  public lastUpdated: string;
  public  permissions: Array<string>;


  constructor() {
  }


  public setName ( name: string ) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setLastUpdated ( lastUpdated: string ) {
    this.lastUpdated = lastUpdated;
  }

  public getLastUpdated (): string {
    return this.lastUpdated;
  }

  public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }

  public setPermissions ( permissions: Array<string> ) {
    this.permissions = permissions;
  }
  public getPermissions (): Array<string> {
    return this.permissions ;
  }

  public  addPermission(permission:string) : void {
    if(this.permissions.find(item=> item === permission)) {
      return;
    }
    this.permissions.push(permission);
  }

  public  deletePermission(permission: string): void {
    let item = this.permissions.find(item => item === permission);
    const index: number = this.permissions.indexOf(item);
    if (index !== -1) {
      this.permissions.splice(index, 1);
    }
  }

}
