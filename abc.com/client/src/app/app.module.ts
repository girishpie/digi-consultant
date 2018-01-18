import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {HomeModule} from './home/home.module';
import {Globals} from "./globals/globals";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
