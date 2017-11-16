import { NgModule } from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {BoQComponent } from './boq.component';
import {BoQService} from './boq.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
//import {NewBoQModule} from './new/new-boq.module';
import {NewBoQComponent} from './new/new-boq.component';
import {BoQs} from './boqs';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    BoQComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
//    NewBoQModule
  ],
  exports : [BoQComponent],
  providers: [BoQs,
              BoQService
              ],
  bootstrap: []
})
export class BoQModule { }
