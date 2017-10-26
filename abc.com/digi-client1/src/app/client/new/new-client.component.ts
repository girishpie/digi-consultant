import { Company } from '../../company/company';
import { Companies } from '../../company/companies';
import { CompanyService } from '../../company/company.service';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Clients } from '../clients';
import { Component, Input, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
   private availableCompanies: Company[];
   private name: string ;
   private address: string ;
   private companyName: string ;

  constructor(private  clientService: ClientService, 
              private companyService: CompanyService, 
              private clients: Clients, 
              private companies: Companies)  {

  }

  ngOnInit() {
    this.getCompanies();
  }
  
  addNewClient() {
    
    let client: Client = new Client();
    client.setName(this.name);
    client.setCompanyName(this.companyName);
    client.setAddress(this.address);
    this.clientService.save(client).subscribe(data => {
        console.log(data);
        client.setId(data);
        this.clients.addClient(client);
      jQuery('.modal').modal('toggle');

    }, error => {
      window.alert(error._body);
    });


  }
  
  getCompanies(){
    this.companyService.getCompanies(null).subscribe( data => {
      this.availableCompanies = this.companies.getCompanies();
    }, error => {
      window.alert(error._body);
    });
  }

}
