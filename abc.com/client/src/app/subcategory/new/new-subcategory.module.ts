import { NgModule } from '@angular/core';
import { NewSubcategoryComponent } from './new-subcategory.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewSubcategoryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewSubcategoryComponent],
  providers: [],
  bootstrap: []
})
export class  NewSubcategoryModule { }
