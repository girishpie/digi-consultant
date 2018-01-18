import { NgModule } from '@angular/core';
import { NewEmployeeComponent } from './new-employee.component';
import { EmployeeComponent } from '../employee.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule} from '@uirouter/angular';
//const employeeState = { name: 'employee', url: '/employee',  component: EmployeeComponent };

@NgModule({
  imports: [
    FormsModule,
    BrowserModule 
   // UIRouterModule.forRoot({ states: [employeeState], useHash: true })
  ],
  declarations: [
    NewEmployeeComponent
  ],
  exports : [NewEmployeeComponent],
  providers: [],
  bootstrap: []
})
export class  NewEmployeeModule { }
