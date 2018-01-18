import { NgModule } from '@angular/core';
import { DocumentComponent } from './document.component';
import {DocumentService} from './document.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewDocumentModule} from './new/new-file.module';
import {Documents} from './documents';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewDocumentModule
  ],
  exports : [DocumentComponent],
  providers: [Documents,
              DocumentService
              ],
  bootstrap: []
})
export class  DocumentModule { }
