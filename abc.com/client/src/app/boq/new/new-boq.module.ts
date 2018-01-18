import { NgModule } from '@angular/core';
import { NewBoQComponent } from './new-boq.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewBoQComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewBoQComponent],
  providers: [],
  bootstrap: []
})
export class  NewBoQModule { }
