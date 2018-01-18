import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from './category';
import {Categories} from './categories';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";
import { Subcategory } from '../subcategory/subcategory';
import { Subcategories } from '../subcategory/subcategories';
import { SubcategoryService } from '../subcategory/subcategory.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})


export class CategoryComponent implements OnInit {
  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  private subcats: string[];
  private availableSubcat: Subcategory[];
  
  pageMode : string;
  constructor(private categoryService: CategoryService,
              private queryParamsService: QueryParamsService, private categories: Categories, 
              private subcategories: Subcategories, private subcategoryService: SubcategoryService)  {
    this.getCategories(null);
    this.getSubcategories();
  }

  ngOnInit() {
  this.pageMode = "viewMode";
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

	getSubcategories() {
	    this.subcategoryService.getSubcategories(null).subscribe( data => {
	      this.availableSubcat = this.subcategories.getSubcategories();
	    }, error => {
	       console.log(error._body.toString() + " No companies found");
	    });
	  }
  public getCategories(queryParams: QueryParams) {
    this.categoryService.getCategories(queryParams).subscribe(data => {
      },
    error => {
      console.log(error._body.toString());
    });

  }
 public editCategory(category: Category) {
  this.pageMode = "editMode";
 }
 
  public saveCategory(category: Category) {
  this.pageMode = "viewMode";
 }
 cancelEdit() : void {

    this.pageMode = "viewMode";
    
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

