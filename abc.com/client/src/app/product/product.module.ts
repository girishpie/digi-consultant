import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UIRouterModule} from '@uirouter/angular';
import {ProductComponent } from './product.component';
import {ProductService} from './product.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewProductComponent} from './new/new-product.component';
import {Products} from './products';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports : [ProductComponent],
  providers: [Products,
              ProductService
              ],
  bootstrap: []
})
export class ProductModule { }
