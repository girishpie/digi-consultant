import { Class } from '@angular/core';

export class Meeting {
    private date: Date;
    private  id: string;
    private  meetingType: string;
    private  venue: string;
    private  meetingNo: string;
    private objective: string;
    private title: string;

    constructor() {
    }

     public setId ( id: string ) {
      this.id = id;
    }
    public getId (): string {
      return this.id ;
    }

    public setMeetingType ( type: string ) {
      this.meetingType = type;
    }

    public getMeetingType (): string {
      return this.meetingType ;
    }

    public setVenue ( venue: string ) {
      this.venue = venue;
    }
    public getVenue (): string {
      return this.venue ;
    }
    public setDate ( ondate: Date ) {
        this.date = ondate;
      }
      public getDate (): Date {
        return this.date ;
      }

    public setTitle ( title: string ) {
      this.title = title;
    }
    public getTitle (): string {
      return this.title ;
    }
    public setObjective ( objective: string ) {
      this.objective = objective;
    }
    public getObjective (): string {
      return this.objective ;
    }

}
