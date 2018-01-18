import {Injectable} from '@angular/core';
import {Subcategory} from './subcategory';


@Injectable()
export class Subcategories {

  private  subcategories: Array<Subcategory> = new Array<Subcategory>();
  private  totalItems: number;

  public setSubcategories (subcategories: Array<Subcategory>) {
    this.subcategories = subcategories;
  }
  public getSubcategories (): Array<Subcategory> {
    return this.subcategories;
  }
  public deleteSubcategory(categoryId: string) {
    let categoryFound: Subcategory = this.subcategories.find(category => categoryId === category.getId());
    const index: number = this.subcategories.indexOf(categoryFound);
    if (index !== -1) {
      this.subcategories.splice(index, 1);
      this.totalItems--;
    }
  }
 public addSubcategory(category: Subcategory) {
    this.subcategories.push(category);
    this.totalItems++;
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
