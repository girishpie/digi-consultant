import {Injectable} from "@angular/core";
import {Client} from "./client";


@Injectable()
export class Clients {

  private  clients: Array<Client> = new Array<Client>();
  private  totalItems:number;

  public setClients(clients: Array<Client>) {
    this.clients = clients;
  }
  public getClients(): Array<Client> {
    return this.clients;
  }
  
   public deleteClient(clientId: string) {
    let clientFound: Client = this.clients.find(client => clientId === client.getId());
    const index: number = this.clients.indexOf(clientFound);
    if (index !== -1) {
      this.clients.splice(index, 1);
      this.totalItems--;
    }
  }
 public addClient(client: Client) {
    this.clients.push(client);
    this.totalItems++;
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
