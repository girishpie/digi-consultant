import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import {ProjectService} from './project.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewProjectModule} from './new/new-project.module';
import {Projects} from './projects';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewProjectModule
  ],
  declarations: [
    ProjectComponent
  ],
  exports : [ProjectComponent],
  providers: [Projects,
              ProjectService
              ],
  bootstrap: []
})
export class  ProjectModule { }
