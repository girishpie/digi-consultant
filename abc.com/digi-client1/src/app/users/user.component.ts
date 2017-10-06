import {Component, Input, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {Users} from "./users";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  constructor(private  userService: UserService,
              private users: Users ,
              private queryParamsService: QueryParamsService)  {
    this.getUsers(null);
  }

  ngOnInit() {
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getUsers(queryParam);
        }
      );
  }

  public getUsers(queryParams: QueryParams) {
    this.userService.getUsers(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body.errorMessage);
    });

  }



  public deleteUser(user: User) {
    this.userService.delete(user.getId()).subscribe(data => {

    });
  }

  getPage(page: number ){
    this.currentPage= page;
    this.queryParamsService.setPageNumber( page-1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

