import { NgModule } from '@angular/core';
import { NewCompanyComponent } from './new-company.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewCompanyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewCompanyComponent],
  providers: [],
  bootstrap: []
})
export class  NewCompanyModule { }
