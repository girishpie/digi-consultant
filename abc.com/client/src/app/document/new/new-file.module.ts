import { NgModule } from '@angular/core';
import { NewDocumentComponent } from './new-file.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewDocumentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewDocumentComponent],
  providers: [],
  bootstrap: []
})
export class  NewDocumentModule { }
