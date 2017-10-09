/**
 * Created by gipai on 10/8/2017.
 */
import {RoleComponent} from './role.component';
import {RoleService} from "./role.service";
import {NewUserModule} from "../users/new/new-user.module";
import {NgxPaginationModule} from "ngx-pagination/dist/ngx-pagination";
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Roles} from "./roles";
import {RoleHelper} from "./role-helper";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewUserModule
  ],
  exports : [RoleComponent],
  providers: [
    RoleService,
    Roles,
    RoleHelper
  ],
  bootstrap: []
})
export class  RoleModule { }
