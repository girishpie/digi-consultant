import { NgModule } from '@angular/core';
import { MeetingComponent } from './meeting.component';
import { MeetingService} from './meeting.service';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { Meetings} from './meetings';
import { Meeting} from './meeting';
import { NgxPaginationModule} from 'ngx-pagination';
import { NewMeetingModule} from './new/new-meeting.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewMeetingModule
  ],
  declarations: [
    MeetingComponent
  ],
  exports : [MeetingComponent],
  providers: [ MeetingService,
              Meetings
              ],
  bootstrap: []
})
export class  MeetingModule { }
