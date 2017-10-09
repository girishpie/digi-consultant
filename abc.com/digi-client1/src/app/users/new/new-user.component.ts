/**
 * Created by gipai on 10/3/2017.
 */
import { Component, Input } from '@angular/core';
import {UserService} from '../user.service';
import {RoleService} from '../../roles/role.service';
import {Role} from '../../roles/role';
import {User} from '../user';
import { OnInit } from '@angular/core';
import {Users} from "../users";
import {Roles} from "../../roles/roles";
declare var jQuery:any;
@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})


export class NewUserComponent implements OnInit {

  private userId: string ;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: string;
  private password: string;
  private appliedRoles: Array<string>;
  private availableRoles: Role[];
  private userRole: string;


  constructor(private  userService: UserService,
              private  roleService: RoleService,
              private roles: Roles,
              private users: Users)  {

  }

  ngOnInit() {
    this.getRoles();
  }

  addNewUser() {
    this.appliedRoles = new Array<string>();

    this.appliedRoles.push(this.userRole);
    console.log(this.userId + this.password + this.userRole);
    let user: User = new User();
    user.setUserId(this.userId);
    user.setFirstName(this.firstName);
    user.setLastName(this.lastName);
    user.setEmail(this.email);
    user.setPhoneNumber(this.phoneNumber);
    user.setPassword(this.password);
    user.setRoleIds(this.appliedRoles);
    this.userService.save(user).subscribe(data => {
        console.log(data);
        user.setId(data);
        this.users.addUser(user);
      jQuery('.modal').modal('toggle');

    }, error => {
      window.alert(error._body);
    });


  }

  getRoles() {
    this.roleService.getRoles(null).subscribe( data => {
      this.availableRoles = this.roles.getRoles();
  }, error => {
      window.alert(error._body);
    });
  }
}
