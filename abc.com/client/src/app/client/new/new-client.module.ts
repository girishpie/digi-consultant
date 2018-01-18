import { NgModule } from '@angular/core';
import { NewClientComponent } from './new-client.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewClientComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewClientComponent],
  providers: [],
  bootstrap: []
})
export class  NewClientModule { }
