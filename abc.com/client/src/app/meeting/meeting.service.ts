import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Meeting} from './meeting';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Meetings} from './meetings';
import {Globals} from "../globals/globals";

@Injectable()
export class MeetingService 
{


  private meetingUrl = this.globals.getBackendUrl() +  'mom/';

  constructor(private http: Http, private  meetings: Meetings, private globals: Globals ) {

  }

  public getMeetings(queryParams: QueryParams)  
  {     let pageNumber = 0;
        const pageSize = 3;
        let searchString = null;
    
        if (queryParams !== null) {
          pageNumber = queryParams.pageNumber;
          if (queryParams.searchString) {
            searchString = queryParams.searchString;
          }
        }
        let endPoint = this.meetingUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
          endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
          .map(res => {
              const res1 = res.json();
              const response = res1.response;
              let i = 0;
              const meetings: Array<Meeting> =  new Array<Meeting>();
              for ( i = 0 ; i < response.length ; i++) {
                const meeting: Meeting = new Meeting();
                meeting.setId(response[i].id);
                meeting.setMeetingType(response[i].type);
                meeting.setVenue(response[i].venue);
                meeting.setDate(response[i].date);
                //meeting.setUploaded(response[i].uploaded);
                meeting.setId(response[i].id);
                meetings.push(meeting);
              }
              this.meetings.setMeeting(meetings);
              this.meetings.setTotalItems(res1.totalElements);
              return true;
            }
          );
  }
      public save(meeting: Meeting)  {
        const endPoint = this.meetingUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, meeting)
          .map(res => {
              const res1 = res.json();
              meeting.setId(res1.id);
              this.meetings.addMeeting(meeting);
              return res1.id;
            }
          );
      }
    
      public delete(id: string)  {
        const endPoint = this.meetingUrl  + id ;
          // Returns response
        return this.http.delete(endPoint)
          .map(res => {
              const res1 = res.json();
              this.meetings.deleteMeeting(res1.id);
            }
          );
      }
}

