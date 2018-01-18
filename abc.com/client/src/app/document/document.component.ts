import {Component, Input, OnInit} from '@angular/core';
import {DocumentService} from './document.service';
import {Document} from './document';
import {Documents} from './documents';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from 'rxjs/Subscription';
import {QueryParams} from '../home/query-obeservables/query-params';


@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})

export class DocumentComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  constructor(private  documentService: DocumentService,
              private documents: Documents ,
              private queryParamsService: QueryParamsService)  {
    this.getDocuments(null);
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
          this.getDocuments(queryParam);
        }
      );
  }

  public getDocuments(queryParams: QueryParams){
    this.documentService.getDocuments(queryParams).subscribe(data => {
      },
    error => {
      console.log(error._body.toString() + " No documents are available");
    });

  }

  public deleteDocument(document: Document) {
    this.documentService.delete(document.getId()).subscribe(data => {

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

