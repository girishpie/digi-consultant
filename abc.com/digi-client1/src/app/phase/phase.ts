import { Class } from '@angular/core';

export class Phase {

  private  id: string;
  private  name: string;
  
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
}
