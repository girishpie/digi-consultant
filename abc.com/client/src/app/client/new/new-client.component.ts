import { Company } from '../../company/company';
import { Companies } from '../../company/companies';
import { CompanyService } from '../../company/company.service';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Clients } from '../clients';
import { Component, Input, OnInit } from '@angular/core';
import {StateService } from '@uirouter/angular';
import { ClientComponent } from '../client.component';

//declare var jQuery:any;
const clientState = { name: 'client', url: '/client',  component: ClientComponent };
@Component({
  selector: 'new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
   private availableCompanies: Company[];
   private name: string ;
   private address: string ;
   private companyId: string ;

  constructor(private  clientService: ClientService, private companyService: CompanyService, 
              private clients: Clients, private companies: Companies,  public stateService: StateService)  {

  }

  ngOnInit() {
    this.getCompanies();
  }
  
  addNewClient() {
    
    let client: Client = new Client();
    client.setName(this.name);
    client.setCompanyId(this.companyId);
    client.setAddress(this.address);
    this.clientService.save(client).subscribe(data => {
        console.log(data);
       // client.setId(data);
        //this.clients.addClient(client);
      this.stateService.go('client');

    }, error => {
      window.alert(error._body);
    });


  }
  
  getCompanies(){
    this.companyService.getCompanies(null).subscribe( data => {
      this.availableCompanies = this.companies.getCompanies();
    }, error => {
      console.log(error._body.toString() + " No companies found");
    });
  }

 goBack() {
    window.history.back();
  }
}
