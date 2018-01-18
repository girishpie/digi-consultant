import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import {ClientService} from './client.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewClientModule} from './new/new-client.module';
import {Clients} from './clients';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewClientModule
  ],
  exports : [ClientComponent],
  providers: [Clients,
              ClientService
              ],
  bootstrap: []
})
export class  ClientModule { }
