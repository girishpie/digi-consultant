/**
 * Created by gipai on 10/3/2017.
 */
import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    NgxPaginationModule
  ],
  exports : [PaginationComponent],
  providers: [],
  bootstrap: []
})
export class  PaginationModule { }
