import { NgModule } from '@angular/core';
import { NewMeetingComponent } from './new-meeting.component';
import { MeetingComponent } from '../meeting.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule} from '@uirouter/angular';


@NgModule({
  imports: [
    FormsModule,
    BrowserModule
    ],
  declarations: [
    NewMeetingComponent
  ],
  exports : [NewMeetingComponent],
  providers: [],
  bootstrap: []
})
export class  NewMeetingModule { }
