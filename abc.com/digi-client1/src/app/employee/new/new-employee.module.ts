import { NgModule } from '@angular/core';
import { NewEmployeeComponent } from './new-employee.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule
  ],
  declarations: [
    NewEmployeeComponent
  ],
  exports : [NewEmployeeComponent],
  providers: [],
  bootstrap: []
})
export class  NewEmployeeModule { }
