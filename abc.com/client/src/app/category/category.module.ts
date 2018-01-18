import { NgModule } from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {CategoryComponent } from './category.component';
import {CategoryService} from './category.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
//import {NewCategoryComponent} from './new/new-category.component';
import {Categories} from './categories';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule
  ],
  exports : [CategoryComponent],
  providers: [Categories,
              CategoryService
              ],
  bootstrap: []
})
export class CategoryModule { }
