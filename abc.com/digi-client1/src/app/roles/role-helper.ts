/**
 * Created by gipai on 10/8/2017.
 */

import {Injectable} from "@angular/core";




@Injectable()
export class RoleHelper{

  private permissions : Array<string> = new Array<string>();

  constructor(){
    this.permissions.push('READ_USER');
    this.permissions.push('CREATE_USER');
    this.permissions.push('DELETE_USER');
    this.permissions.push('UPDATE_USER');
    this.permissions.push('CREATE_PROJECT');
    this.permissions.push('READ_PROJECT');
    this.permissions.push('DELETE_PROJECT');
    this.permissions.push('UPDATE_PROJECT');
    this.permissions.push('UPDATE_COMPNAY');
  }

  public getPermissions(): Array<string>{
    return this.permissions;
  }
}
