import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import {EmployeeService} from './employee.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NewEmployeeModule} from './new/new-employee.module';
import {Employees} from './employees';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    //RouterModule,
    NgxPaginationModule
    //NewEmployeeModule
  ],
  declarations: [
    EmployeeComponent
  ],
  exports : [EmployeeComponent],
  providers: [Employees,
              EmployeeService
              ],
  bootstrap: []
})
export class EmployeeModule { }
