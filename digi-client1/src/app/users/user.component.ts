import { Component, Input } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {

  private users: Array<User> ;

  constructor(private  userService: UserService)  {
    this.getUsers();
  }

  public getUsers() {
    this.userService.getUsers().subscribe(data=> {
        this.users = data;
      },
    error => {
      window.alert(error._body.errorMessage);
    });

  }

  public deleteUser(user:User){
    this.userService.delete(user.getId()).subscribe();
  }
}

