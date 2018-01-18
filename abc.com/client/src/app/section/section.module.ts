import { NgModule } from '@angular/core';
import { SectionComponent } from './section.component';
import {SectionService} from './section.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewSectionModule} from './new/new-section.module';
import {Sections} from './sections';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewSectionModule
  ],
  exports : [SectionComponent],
  providers: [Sections,
              SectionService
              ],
  bootstrap: []
})
export class  SectionModule { }
