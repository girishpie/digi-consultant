import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from './client.service';
import {Client} from './client';
import {Clients} from "./clients";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})

export class ClientComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  constructor(private  clientService: ClientService,
              private clients: Clients ,
              private queryParamsService: QueryParamsService)  {
    this.getClients(null);
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
          this.getClients(queryParam);
        }
      );
  }

  public getClients(queryParams: QueryParams) {
    this.clientService.getClients(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body.errorMessage);
    });

  }



  public deleteClient(client: Client) {
    this.clientService.delete(client.getId()).subscribe(data => {

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

