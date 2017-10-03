import { Class } from '@angular/core';



export class User {

  private  id: string;
  private  username: string;
  private  password: string;
  private  roleIds: Array<string>;


  constructor() {
  }


  public setUserName ( username: string ) {
    this.username = username;
  }

  public getUsername(): string {
    return this.username;
  }

  public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  public setPassword ( password: string ) {
    this.password = password;
  }
  public getPassword (): string {
    return this.password ;
  }
  public setRoleIds ( roleIds: Array<string> ) {
    this.roleIds = roleIds;
  }
  public getRoleIds (): Array<string> {
    return this.roleIds ;
  }
}
