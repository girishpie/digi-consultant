import { NgModule } from '@angular/core';
import { PhaseComponent } from './phase.component';
import {PhaseService} from './phase.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewPhaseModule} from './new/new-phase.module';
import {Phases} from './phases';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PhaseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    NewPhaseModule
  ],
  exports : [PhaseComponent],
  providers: [Phases,
              PhaseService
              ],
  bootstrap: []
})
export class  PhaseModule { }
