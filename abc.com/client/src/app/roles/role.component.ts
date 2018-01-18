/**
 * Created by gipai on 10/8/2017.
 */


import {Component} from "@angular/core";
import {QueryParamsService} from "../home/query-obeservables/query-params.service";
import {RoleService} from "./role.service";
import {QueryParams} from "../home/query-obeservables/query-params";
import {Roles} from "./roles";
import {RoleHelper} from "./role-helper";
import {Role} from "./role";

@Component({
  selector: 'role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})

export class RoleComponent {


  private roleMap : Map<string,Map<string,boolean>>;
  private check:boolean;

  constructor(private  roleService: RoleService,
              private roles: Roles ,
              private roleHelper:RoleHelper,
              private queryParamsService: QueryParamsService)  {
    this.getRoles(null);
  }

  public getRoles(queryParams: QueryParams) {
    this.roleService.getRoles(queryParams).subscribe(data => {

      this.roleMap = new  Map<string,Map<string,boolean>>();
      for(let i = 0 ; i < this.roles.getRoles().length; i++){

        let role = this.roles.getRoles()[i];
        let permissions = new Map<string,boolean>();
        for (let j = 0; j < this.roleHelper.getPermissions().length ; j ++) {
          let permission = this.roleHelper.getPermissions()[j];
          permissions.set(permission , this.hasPermission(role,permission))
        }
        this.roleMap.set(this.roles.getRoles()[i].getId(), permissions)
      }
      },
      error => {
       console.log(error._body.toString() + " No roles found");
      });

  }

  public hasPermission(role:Role , permission : string){
     let permissions = role.getPermissions();
     if(permissions.find(item => permission == item)){
       return true;
     }
     return false;
  }

  public save(role:Role , permission : string){
      let value = this.roleMap.get(role.getId()).get(permission);
      this.roleMap.get(role.getId()).set(permission,!value);
      if(value){
        role.deletePermission( permission);
      }else {
        role.addPermission( permission);
      }


      this.roleService.patch(role).subscribe();
  }
  
  public deleteRole(role: Role) {
    this.roleService.delete(role.getId()).subscribe(data => {

    });
  }
}
