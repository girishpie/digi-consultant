import {Injectable} from "@angular/core";
import {Employee} from "./employee";


@Injectable()
export class Employees {

  private  employees: Array<Employee> = new Array<Employee>();
  private  totalItems: number;

  public setEmployees (employees: Array<Employee>) {
    this.employees = employees;
  }
  public getEmployees(): Array<Employee> {
    return this.employees;
  }

  public addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.totalItems++;
  }

  public deleteEmployee(id: string) {
    let employeeFound: Employee = this.employees.find(employee => id === employee.getId());
    const index: number = this.employees.indexOf(employeeFound);
    if (index !== -1) {
      this.employees.splice(index, 1);
      this.totalItems--;
    }
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
