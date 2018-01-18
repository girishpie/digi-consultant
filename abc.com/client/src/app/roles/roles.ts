import {Role} from "./role";
import {Injectable} from "@angular/core";
/**
 * Created by gipai on 10/8/2017.
 */


@Injectable()
export class Roles {

  private  roles: Array<Role> = new Array<Role>();
  private  totalItems:number;



  public setRoles (roles : Array<Role>) {
    this.roles = roles;
  }
  public getRoles() : Array<Role> {
    return this.roles;
  }

  public addRole(user: Role) {
    this.roles.push(user);
    this.totalItems++;
  }

  public deleteRole(userId: string) {
    let userFound: Role = this.roles.find(user => userId === user.getId());
    const index: number = this.roles.indexOf(userFound);
    if (index !== -1) {
      this.roles.splice(index, 1);
      this.totalItems--;
    }
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }

  public getAllPermissions() {

  }
}
