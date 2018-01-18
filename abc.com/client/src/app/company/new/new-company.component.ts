import { Company } from '../company';
import { Companies } from '../companies';
import { CompanyService } from '../company.service';
import { StateService } from '@uirouter/angular';
import { CompanyComponent } from '../company.component';
import { Component, Input, OnInit } from '@angular/core';

//declare var jQuery:any;
const companyState = { name: 'company', url: '/company',  component: CompanyComponent };
@Component({
  selector: 'new-company',
  templateUrl: './new-company.component.html',
  styleUrls: []
})
export class NewCompanyComponent implements OnInit {

   private companyName: string ;
   private address: string ;


  constructor(private companyService: CompanyService,
              private companies: Companies, public stateService: StateService)  {

  }

  ngOnInit() {
  }
  
  addNewCompany() {
    
    let company: Company = new Company();
    company.setCompanyName(this.companyName);
    company.setAddress(this.address);
    this.companyService.save(company).subscribe(data => {
        console.log(data);
       // company.setId(data);
       // this.companies.addCompany(company);
      this.stateService.go('company');

    }, error => {
      window.alert(error._body);
    });
  }
  
  goBack() {
    	window.history.back();
  }
  	
}
