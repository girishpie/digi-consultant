import { NgModule } from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {SubcategoryComponent } from './subcategory.component';
import {SubcategoryService} from './subcategory.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewSubcategoryComponent} from './new/new-subcategory.component';
import {Subcategories} from './subcategories';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    SubcategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule
  ],
  exports : [SubcategoryComponent],
  providers: [Subcategories,
              SubcategoryService
              ],
  bootstrap: []
})
export class SubcategoryModule { }
