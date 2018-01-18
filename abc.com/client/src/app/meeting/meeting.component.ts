import {Component, Input, OnInit} from '@angular/core';
import {MeetingService} from './meeting.service';
import {Meeting} from './meeting';
import {Meetings} from './meetings';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from 'rxjs/Subscription';
import {QueryParams} from '../home/query-obeservables/query-params';


@Component({
  selector: 'meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})

export class MeetingComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  constructor(private  meetingService: MeetingService,
              private meetings: Meetings ,
              private queryParamsService: QueryParamsService)  {
    this.getMeetings(null);
  }

  ngOnInit() {
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getMeetings(queryParam);
        }
      );
  }

  public getMeetings(queryParams: QueryParams){
    this.meetingService.getMeetings(queryParams).subscribe(data => {
      },
    error => {
      console.log(error._body.toString() + ' No Meeting are available');
    });

  }

  public deleteMeeting(meeting: Meeting) {
    this.meetingService.delete(meeting.getId()).subscribe(data => {

    });
  }

  getPage(page: number ) {
    this.currentPage = page;
    this.queryParamsService.setPageNumber( page - 1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

