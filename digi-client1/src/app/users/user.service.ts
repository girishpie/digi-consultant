/**
 * Created by gipai on 10/2/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from './user';

@Injectable()
export class UserService {


  private userUrl = 'http://localhost:4200/api/user/';
  constructor(private http: Http) {

  }

  public getUsers()  {
    const endPoint = this.userUrl;
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const users: Array<User> =  new Array<User>();
          for ( i = 0 ; i < response.length ; i++) {
            const user: User = new User();
            user.setUserName(response[i].username);
            user.setPassword(response[i].password);
            user.setId(response[i].id);
            user.setRoleIds(response[i].roleIds);
            users.push(user);
          }
          return users;
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
          return res1.id;
        }
      );
  }
}
