import { NgModule } from '@angular/core';
import { NewSectionComponent } from './new-section.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewSectionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewSectionComponent],
  providers: [],
  bootstrap: []
})
export class  NewSectionModule { }
