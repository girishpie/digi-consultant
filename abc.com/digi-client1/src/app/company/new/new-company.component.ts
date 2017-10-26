import { Company } from '../company';
import { Companies } from '../companies';
import { CompanyService } from '../company.service';

import { Component, Input, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'new-company',
  templateUrl: './new-company.component.html',
  styleUrls: []
})
export class NewCompanyComponent implements OnInit {

   private companyName: string ;
   private address: string ;


  constructor(private companyService: CompanyService,
              private companies: Companies)  {

  }

  ngOnInit() {
  }
  
  addNewCompany() {
    
    let company: Company = new Company();
    company.setCompanyName(this.companyName);
    company.setAddress(this.address);
    this.companyService.save(company).subscribe(data => {
        console.log(data);
        company.setId(data);
        this.companies.addCompany(company);
      jQuery('.modal').modal('toggle');

    }, error => {
      window.alert(error._body);
    });


  }
}
