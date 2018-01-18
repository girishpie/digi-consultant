import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { MeetingService } from '../meeting.service';
import { MeetingComponent } from '../meeting.component';
import { Meetings } from '../meetings';
import { StateService } from '@uirouter/angular';

//declare var jQuery:any;
const meetingState = { name: 'meeting', url: '/meeting',  component: MeetingComponent };

@Component({
  selector: 'new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.scss']
})
 

export class NewMeetingComponent implements OnInit {

   private tittle: string ;
   private objective: string;
   private ondate: Date;
   //private  id: string;
   private  type: string;
   private  venue: string;
   private  uploaded: string;
   
  
  constructor(private  meetingService: MeetingService,
              private meetings: Meetings, public stateService: StateService)  {
  		//this.router = router;
  }

  ngOnInit() {
 
  }
  
  addNewMeeting() {
    let meeting: Meeting = new Meeting();
    meeting.setTitle(this.tittle);
    meeting.setObjective(this.objective);
    //meeting.setId(this.id);
    meeting.setMeetingType(this.type);
    meeting.setVenue(this.venue);
    meeting.setDate(this.ondate);

    this.meetingService.save(meeting).subscribe(data => {
        console.log(data);
        meeting.setId(data);
        this.meetings.addMeeting(meeting);
         this.stateService.go('meeting');
	    
    }, error => {
      window.alert(error._body);
    });
   
  }
 
  goBack() {
    window.history.back();
  }
  
}
