import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Client} from './client';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Clients} from "./clients";
import {Globals} from "../globals/globals";

@Injectable()
export class ClientService {


  private clientUrl = this.globals.getBackendUrl() +  'client/';

  constructor(private http: Http, private  clients: Clients, private globals: Globals ) {

  }

  public getClients(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.clientUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const clients: Array<Client> =  new Array<Client>();
          for ( i = 0 ; i < response.length ; i++) {
            const client: Client = new Client();
            client.setName(response[i].name);
            client.setAddress(response[i].address);
            client.setCompanyName(response[i].companyName);
            client.setProjectNames(response[i].projectNames);
            client.setId(response[i].id);
            clients.push(client);
          }
          this.clients.setClients(clients);
          this.clients.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(client: Client)  {
    const endPoint = this.clientUrl + client.getCompanyId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Returns response
    return this.http.post(endPoint, client)
      .map(res => {
          const res1 = res.json();
          client.setId(res1.id);
          this.clients.addClient(client);
          return res1.id;
        }
      );
  }

  public delete(id: string)  {
    const endPoint = this.clientUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.clients.deleteClient(res1.id);
        }
      );
  }
}
