import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { Customer } from './customer';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoanApplicationService {


  private loanApplicationUrl = 'http://localhost:9011/loan/';
  constructor(private http: Http) {

  }

// Returns list of animals based input parameters.
  public validate(income : number,  type: string)  {
    const endPoint = this.loanApplicationUrl+'validate1?'+  'type='+ type + '&' +  'salary=' +  income ; 
    // Returns response
   return this.http.get(endPoint) 
     .map(res=> {
         var res1 = res.json();
         var cust : Customer = new Customer();
         cust.setType(res1.type);
         cust.setIncome(res1.income);
         cust.setEligibility(res1.income * res1.eligibility);
         return cust;
     }
     )
  }
} 