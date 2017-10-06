/**
 * Created by gipai on 10/3/2017.
 */
import { Class } from '@angular/core';



export class Role {

  public  id: string;
  public  name: string;
  public  permissions: Array<string>;


  constructor() {
  }


  public setName ( name: string ) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
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
}
