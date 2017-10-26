import { NgModule } from '@angular/core';
import { NewDepartmentComponent } from './new-department.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewDepartmentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewDepartmentComponent],
  providers: [],
  bootstrap: []
})
export class  NewDeapartmentModule { }
