import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from './category';
import {Categories} from './categories';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;

  constructor(private categoryService: CategoryService,
              private queryParamsService: QueryParamsService, private categories: Categories)  {
    this.getCategories(null);
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
          this.getCategories(queryParam);
        }
      );
  }

  public getCategories(queryParams: QueryParams) {
    this.categoryService.getCategories(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body.errorMessage);
    });

  }

  public deleteCategory(category: Category) {
    this.categoryService.delete(category.getId()).subscribe(data => {

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

