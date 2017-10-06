/**
 * Created by gipai on 10/4/2017.
 */
import {Injectable} from "@angular/core";
import {User} from "./user";


@Injectable()
export class Users {

  private  users: Array<User> = new Array<User>();
  private  totalItems:number;

  public setUsers (users : Array<User>) {
    this.users = users;
  }
  public getUsers() : Array<User> {
    return this.getUsers();
  }

  public addUser(user: User) {
    this.users.push(user);
    this.totalItems++;
  }

  public deleteUser(userId: string) {
    let userFound: User = this.users.find(user => userId === user.getId());
    const index: number = this.users.indexOf(userFound);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.totalItems--;
    }
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
