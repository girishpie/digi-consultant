/**
 * Created by gipai on 10/3/2017.
 */
import { Component, Input } from '@angular/core';
import {RoleService} from '../role.service';
import {Role} from '../role';
import { RoleHelper } from '../role-helper';
import { Roles } from '../roles';
import { OnInit } from '@angular/core';

import {StateService } from '@uirouter/angular';
import { RoleComponent } from '../role.component';

//declare var jQuery:any;
const roleState = { name: 'role', url: '/role',  component: RoleComponent };
@Component({
  selector: 'new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss']
})

export class NewRoleComponent   {

  private name: string ;
  private permissions  = {};
  private permissionsKey = {};
  constructor(private  roleService: RoleService, private roles: Roles, private roleHelper: RoleHelper,  public stateService: StateService)  {
      for (let j = 0; j < this.roleHelper.getPermissions().length ; j ++) {
          const permission = this.roleHelper.getPermissions()[j];
          this.permissions[permission] = false;
        }
      this.permissionsKey = this.roleHelper.getPermissionskey();
  }

  addNewRole() {

    let role: Role = new Role();
    role.setName(this.name);
    let selectedPermissions = new Array<string>();

    var keys = Object.keys( this.permissions);
    
    for(let i = 0 ; i<keys.length ; i++){
      if (this.permissions[keys[i]] === true) {
         selectedPermissions.push(this.permissionsKey[i]);
      }
    }
    
    role.setPermissions(selectedPermissions);
    this.roleService.save(role).subscribe(data => {
        console.log(data);
        //role.setId(data);
        //this.roles.addRole(role);
      this.stateService.go('role');

    }, error => {
      window.alert(error._body);
    });

  }
  
  onChanged(permission:string):void {
     let value = this.permissions[permission];
     this.permissions[permission] = !value;
  
  }
  
  goBack() {
    window.history.back();
  }
  
}
