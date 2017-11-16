import { Class } from '@angular/core';

export class Product {

  private id: string;
  private name: string;
  private quantity: number;
  private bimId: string;
  private amount: number;
  private unit: string;
  private description: string;
  private productCatName: string;
  private categoryId: string;
  private sectionName: string;
  private sectionId: string;

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
  public setProductCatName ( productCatName: string ) {
    this.productCatName = productCatName;
  }
  public getProductCatName (): string {
    return this.productCatName ;
  }
  public setQuantity ( quantity: number ) {
    this.quantity = quantity;
  }
  public getQuantity (): number {
    return this.quantity ;
  }
  public setBimId ( bimId: string ) {
    this.bimId = bimId;
  }
  public getBimId (): string {
    return this.bimId ;
  }
  public setAmount ( amount: number ) {
    this.amount = amount;
  }
  public getAmount (): number {
    return this.amount;
  }
  public setUnit ( unit: string ) {
    this.unit = unit;
  }
  public getUnit (): string {
    return this.unit ;
  }
  public setDescription ( description: string ) {
    this.description = description;
  }
  public getDescription (): string {
    return this.description ;
  }
  public setSectionName ( sectionName: string ) {
    this.sectionName = sectionName;
  }
  public getSectionName (): string {
    return this.sectionName ;
  }
  public setSectionId ( sectionId: string ) {
    this.sectionId = sectionId;
  }
  public getSectionId (): string {
    return this.sectionId ;
  }
  public setCategoryId ( categoryId: string ) {
    this.categoryId = categoryId;
  }
  public getCategoryId (): string {
    return this.categoryId ;
  }
}
