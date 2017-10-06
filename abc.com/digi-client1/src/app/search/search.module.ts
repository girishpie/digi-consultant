import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  exports : [SearchComponent],
  providers: [],
  bootstrap: []
})
export class  SearchModule { }
