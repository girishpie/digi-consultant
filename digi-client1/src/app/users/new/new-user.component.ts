/**
 * Created by gipai on 10/3/2017.
 */
import { Component, Input } from '@angular/core';
import {UserService} from '../user.service';
import {RoleService} from '../role.service';
import {Role} from '../role';
import {User} from '../user';
import { OnInit } from '@angular/core';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})

export class NewUserComponent implements OnInit {

  private userName: string = "";
  private password: string ="";
  private roles : Array<string>;
  private availableRoles: Role[];
  private userRole: string;

  constructor(private  userService: UserService, private  roleService: RoleService)  {

  }

  ngOnInit() {
    this.getRoles();
  }

  addNewUser() {
    this.roles = new Array<string>();

    this.roles.push(this.userRole);
    console.log(this.userName + this.password + this.userRole);
    let user: User = new User();
    user.setUserName(this.userName);
    user.setPassword(this.password);
    user.setRoleIds(this.roles);
    this.userService.save(user).subscribe(data => {
        console.log(data);
    }, error => {
      window.alert(error._body);
    });


  }

  getRoles() {
    this.roleService.getRoles().subscribe( data => {
      this.availableRoles = data;
  }, error=> {
      window.alert(error._body);
    });
  }
}
