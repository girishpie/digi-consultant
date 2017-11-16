import { NgModule } from '@angular/core';
import { NewProductComponent } from './new-product.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewProductComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewProductComponent],
  providers: [],
  bootstrap: []
})
export class  NewProductModule { }
