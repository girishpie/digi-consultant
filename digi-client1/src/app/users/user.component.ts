import { Component, Input } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  private users: Array<User> ;

  constructor(private  userService: UserService)  {
    this.getUsers();
  }

  public getUsers() {
    this.userService.getUsers().subscribe(users => {
        this.users = users;
      }
    );
  }
}

