import { Class } from '@angular/core';



export class Customer {
  private name: string;
  private income: number;
  private type: string;
  private eligibility:number;

  constructor() {
  }

  public setName (name:string) {
    this.name = name;
  }

  public getName() : string{
    return this.name;
  }

  public setType(type:string){
    this.type = type;
  }

  public  getType() : string{
  return this.type;
}

  public setIncome(income:number){ 
   this.income = income;
}
  
  public setEligibility(eligibility:number){

   this.eligibility = eligibility;
  }
  
  public getEligibility() : number{
 
   return  this.eligibility
}

  public  getIncome() : number{
 return this.income;
}


}