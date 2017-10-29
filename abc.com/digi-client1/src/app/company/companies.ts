import {Injectable} from "@angular/core";
import {Company} from "./company";


@Injectable()
export class Companies {

  private  companies: Array<Company> = new Array<Company>();
  private  totalItems: number;

  public setCompanies (companies: Array<Company>) {
    this.companies = companies;
  }
  public getCompanies(): Array<Company> {
    return this.companies;
  }
  
   public deleteCompany(companyId: string) {
    let companyFound: Company = this.companies.find(company => companyId === company.getId());
    const index: number = this.companies.indexOf(companyFound);
    if (index !== -1) {
      this.companies.splice(index, 1);
      this.totalItems--;
    }
  }
 public addCompany(company: Company) {
    this.companies.push(company);
    this.totalItems++;
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
