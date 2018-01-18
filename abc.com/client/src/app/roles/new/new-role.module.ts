import { NgModule } from '@angular/core';
import { NewRoleComponent } from './new-role.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewRoleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewRoleComponent],
  providers: [],
  bootstrap: []
})
export class  NewRoleModule { }
