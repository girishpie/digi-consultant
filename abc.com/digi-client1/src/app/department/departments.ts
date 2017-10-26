import {Injectable} from "@angular/core";
import {Department} from "./department";


@Injectable()
export class Departments {

  private  departments: Array<Department> = new Array<Department>();
  private  totalItems: number;

  public setDepartments (departments: Array<Department>) {
    this.departments = departments;
  }
  public getDepartments (): Array<Department> {
    return this.getDepartments();
  }
   public deleteDepartment(departmentId: string) {
    let departmentFound: Department = this.departments.find(department => departmentId === department.getId());
    const index: number = this.departments.indexOf(departmentFound);
    if (index !== -1) {
      this.departments.splice(index, 1);
      this.totalItems--;
    }
  }
 public addDepartment(department: Department) {
    this.departments.push(department);
    this.totalItems++;
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
