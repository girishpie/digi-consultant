import { NgModule } from '@angular/core';
import {DepartmentComponent } from './department.component';
import {DepartmentService} from './department.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewDepartmentModule} from './new/new-department.module';
import {Departments} from './departments';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewDepartmentModule
  ],
  exports : [DepartmentComponent],
  providers: [Departments,
              DepartmentService
              ],
  bootstrap: []
})
export class DepartmentModule { }
