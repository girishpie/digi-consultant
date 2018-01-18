import { NgModule } from '@angular/core';
import { NewPhaseComponent } from './new-phase.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewPhaseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewPhaseComponent],
  providers: [],
  bootstrap: []
})
export class  NewPhaseModule { }
