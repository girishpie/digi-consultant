/**
 * Created by gipai on 10/3/2017.
 */
/**
 * Created by gipai on 10/2/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {Role} from "./role";

@Injectable()
export class RoleService {


  private userUrl = 'http://localhost:4200/api/role/';
  constructor(private http: Http) {

  }

  public getRoles()  {
    const endPoint = this.userUrl;
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const roles: Array<Role> =  new Array<Role>();
          for ( i = 0 ; i < response.length ; i++) {
            const role: Role = new Role();
            role.setId(response[i].id);
            role.setName(response[i].name);
            role.setPermissions(response[i].permissions);
            roles.push(role);
          }
          return roles;
        }
      );
  }
}
