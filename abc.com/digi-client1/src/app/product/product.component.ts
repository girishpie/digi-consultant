import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';
import {Products} from './products';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";
import { Section } from '../section/section';
import { Sections } from '../section/sections';
import { SectionService } from '../section/section.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  private sectionId: string;
  private availableSections: Section[];

  constructor(private productService: ProductService, private sectionService: SectionService,
              private products: Products, private sections: Sections,
              private queryParamsService: QueryParamsService)  {
    this.getProducts(null);
  }

  ngOnInit() {
    this.getSections();
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getProducts(queryParam);
        }
      );
  }

  public getProducts(queryParams: QueryParams) {
    this.productService.getProducts(queryParams, this.sectionId).subscribe(data => {
      },
    error => {
      window.alert(error._body.errorMessage);
    });

  }

  public deleteProduct(product: Product) {
    this.productService.delete(product.getId()).subscribe(data => {

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
  getSections() {
    this.sectionService.getSections(null).subscribe( data => {
      this.availableSections = this.sections.getSections();
    }, error => {
      window.alert(error._body);
    });
  }
}

