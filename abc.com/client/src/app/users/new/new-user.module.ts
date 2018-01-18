import { NgModule } from '@angular/core';
import { NewUserComponent } from './new-user.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewUserComponent],
  providers: [],
  bootstrap: []
})
export class  NewUserModule { }
