import { Class } from '@angular/core';

export class Subcategory {

  private  id: string;
  private  name: string;
  private  description: string;
  private  parentName: string;
  private categoryId: string;
  
  constructor() {
  }
  public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  public setName ( name: string ) {
    this.name = name;
  }
  public getName (): string {
    return this.name ;
  }
  public setDescription ( description: string ) {
    this.description = description;
  }
  public getDescription (): string {
    return this.description ;
  }
  public setParentName ( parentName: string ) {
    this.parentName = parentName;
  }
  public getParentName (): string {
    return this.parentName ;
  }
  public setCategoryId ( categoryId: string ) {
    this.categoryId = categoryId;
  }
  public getCategoryId (): string {
    return this.categoryId ;
  }
}

