/**
 * Created by gipai on 10/2/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Users} from "./users";
import {Globals} from "../globals/globals";

@Injectable()
export class UserService {


  private userUrl = this.globals.getBackendUrl() + 'user/';

  constructor(private http: Http, private  users: Users , private globals : Globals ) {

  }

  public getUsers(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.userUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const users: Array<User> =  new Array<User>();
          for ( i = 0 ; i < response.length ; i++) {
            const user: User = new User();
            user.setUserId(response[i].userId);
            user.setFirstName(response[i].firstName);
            user.setLastName(response[i].lastName);
            user.setEmail(response[i].firstEmail);
            user.setPhoneNumber(response[i].phoneNumber);
            user.setPassword(response[i].password);
            user.setId(response[i].id);
            user.setRoleIds(response[i].roleIds);
            users.push(user);
          }
          this.users.setUsers(users);
          this.users.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(user: User)  {
    const endPoint = this.userUrl;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint,user)
      .map(res => {
          const res1 = res.json();
          user.setId(res1.id);
          this.users.addUser(user);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.userUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.users.deleteUser(res1.id);
        }
      );
  }
}
