import { NgModule } from '@angular/core';
import { NewProjectComponent } from './new-project.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule
  ],
  declarations: [
    NewProjectComponent
  ],
  exports : [NewProjectComponent],
  providers: [],
  bootstrap: []
})
export class  NewProjectModule { }
