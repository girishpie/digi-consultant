import { Class } from '@angular/core';



export class User {

  private  id: string;
  private  userId: string;
  private  firstName: string;
  private  lastName: string;
  private  email: string;
  private  phoneNumber: string;
  private  password: string;
  private  roleIds: Array<string>;


  constructor() {
  }


  public setUserId ( userId: string ) {
    this.userId = userId;
  }

  public getUserId(): string {
    return this.userId;
  }
  public setFirstName ( firstName: string ) {
    this.firstName = firstName;
  }

  public getFirstName(): string {
    return this.firstName;
  }
  public setLastName ( lastName: string ) {
    this.lastName = lastName;
  }

  public getLastName(): string {
    return this.lastName;
  }
  public setEmail ( email: string ) {
    this.email = email;
  }

  public getEmail(): string {
    return this.email;
  }
  public setPhoneNumber ( phoneNumber: string ) {
    this.phoneNumber = phoneNumber;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
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
