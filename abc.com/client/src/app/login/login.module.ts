import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UIRouterModule} from '@uirouter/angular';
import {LoginComponent } from './login.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports : [LoginComponent],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
