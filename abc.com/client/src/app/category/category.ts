import { Class } from '@angular/core';

export class Category {

  private  id: string;
  private  name: string;
  private  description: string;
  private  subCategories: Array<string>;

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
  public setSubCategories ( subCategories: Array<string> ) {
    this.subCategories = subCategories;
  }
  public getSubCategories(): Array<string> {
    return this.subCategories;
  }
}

