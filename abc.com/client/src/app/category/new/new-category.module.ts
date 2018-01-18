import { NgModule } from '@angular/core';
import { NewCategoryComponent } from './new-category.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewCategoryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewCategoryComponent],
  providers: [],
  bootstrap: []
})
export class  NewCategoryModule { }
