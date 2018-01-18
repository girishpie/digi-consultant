import {Injectable} from "@angular/core";
import {Meeting} from './meeting';


@Injectable()
export class Meetings 
{

    private  meetings: Array<Meeting> = new Array<Meeting>();
    private  totalItems:number;
  
    public setMeeting(meetings: Array<Meeting>) {
      this.meetings = meetings;
    }
    public getMeeting(): Array<Meeting> {
      return this.meetings;
    }
    
     public deleteMeeting(meetingId: string) 
     {
      let meetingFound: Meeting = this.meetings.find(meeting => meetingId === meeting.getId());
      const index: number = this.meetings.indexOf(meetingFound);
      if (index !== -1) 
       {
        this.meetings.splice(index, 1);
        this.totalItems--;
       }
     }
   public addMeeting(meeting: Meeting) {
      this.meetings.push(meeting);
      this.totalItems++;
    }
  
    public setTotalItems(totalItems: number) {
      this.totalItems = totalItems;
    }
  
    public getTotalItems() {
      return this.totalItems;
    }
  }
  