/**
 * Created by gipai on 10/2/2017.
 */
import { Injectable } from '@angular/core';
import { Http,RequestOptions ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from '../users/user';
import {Role} from "./role";
import {Globals} from '../globals/globals';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Roles} from "./roles";


@Injectable()
export class RoleService {


  private userUrl =  'role/';
  constructor(private http: Http,private globals: Globals, private roles: Roles ) {

  }

  public getRoles(queryParams: QueryParams)  {
    const endPoint = this.globals.getBackendUrl() + this.userUrl;
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
            role.setLastUpdated(response[i].lastUpdated);
            role.setPermissions(response[i].permissions);
            roles.push(role);
          }
         this.roles.setRoles(roles);
        }
      );
  }

  public patch(role:Role)  {
    const endPoint = this.globals.getBackendUrl() + this.userUrl + role.getId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // Returns response
    return this.http.patch(endPoint, role, options)
      .map(res => {
          const res1 = res.json();
          return res1.id;
        }
      );
  }
  
  public save(role: Role)  {
    const endPoint = this.globals.getBackendUrl() + this.userUrl;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
     let options = new RequestOptions({ headers: headers });
    // Returns response
    return this.http.post(endPoint, role,options)
      .map(res => {
          const res1 = res.json();
          role.setId(res1.id);
          this.roles.addRole(role);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.globals.getBackendUrl() + this.userUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.roles.deleteRole(res1.response);
        }
      );
  }
}
