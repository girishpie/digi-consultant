import {Injectable} from '@angular/core';
import {Category} from './category';


@Injectable()
export class Categories {

  private  categories: Array<Category> = new Array<Category>();
  private  totalItems: number;

  public setCategories (categories: Array<Category>) {
    this.categories = categories;
  }
  public getCategories (): Array<Category> {
    return this.categories;
  }
  public deleteCategory(categoryId: string) {
    let categoryFound: Category = this.categories.find(category => categoryId === category.getId());
    const index: number = this.categories.indexOf(categoryFound);
    if (index !== -1) {
      this.categories.splice(index, 1);
      this.totalItems--;
    }
  }
 public addCategory(category: Category) {
    this.categories.push(category);
    this.totalItems++;
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
