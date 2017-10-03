import { Component, Input } from '@angular/core';
import {LoanApplicationService} from './loan-application.service';

@Component({
  selector: 'loanform',
  templateUrl: './loan.application.component.html',
  styleUrls: ['./loan.application.component.css']
})

export class LoanApplicationComponent {
  title = 'Loan Application Form!';

  
  firstName ='Shilpa';
  
  lastName = 'Pai';
  
  income =1000.0;
 
  type  = 'BUSINESS'  ;
  
  eligibility = 0;
  
  submit(){
  
   console.log(this.income);  
   console.log(this.type);
   
  this.loanApplicationService.validate(this.income,this.type).subscribe(customer => {
 	 this.eligibility = customer.getEligibility()
  	}
  	);
  }
  
  constructor(private  loanApplicationService: LoanApplicationService) {  
  
  }  
  
 
}
