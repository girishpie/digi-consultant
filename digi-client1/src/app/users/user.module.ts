import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import {UserService} from './user.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewUserModule} from './new/new-user.module';
import {RoleService} from './role.service';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NewUserModule
  ],
  exports : [UserComponent],
  providers: [UserService,
              RoleService,
              ],
  bootstrap: []
})
export class  UserModule { }
