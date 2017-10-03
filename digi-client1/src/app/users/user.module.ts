import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import {UserService} from './user.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  exports : [UserComponent],
  providers: [UserService],
  bootstrap: []
})
export class  UserModule { }
