import { CategoryService } from '../../category/category.service';
import { Categories } from '../../category/categories';
import { Category } from '../../category/category';
import { Subcategory } from '../subcategory';
import { Subcategories } from '../subcategories';
import { SubcategoryService } from '../subcategory.service';

import { Component, Input, OnInit } from '@angular/core';
import {StateService } from '@uirouter/angular';
import { SubcategoryComponent } from '../subcategory.component';

//declare var jQuery:any;
const subcategoryState = { name: 'subcategory', url: '/subcategory',  component: SubcategoryComponent };
@Component({
  selector: 'new-subcategory',
  templateUrl: './new-subcategory.component.html',
  styleUrls: []
})
export class NewSubcategoryComponent implements OnInit {
  private name: string;
  private description: string;
  private availableCategories: Category[];
  private categoryId: string;

  constructor(private subcategoryService: SubcategoryService, private categoryService: CategoryService,
     private categories: Categories,  public stateService: StateService)  {

  }

  ngOnInit() {
     this.getCategories();
  }

  addNewSubcategory() {
    let category: Subcategory = new Subcategory();
    category.setName(this.name);
    category.setDescription(this.description);
    category.setCategoryId(this.categoryId);
    this.subcategoryService.save(category).subscribe(data => {
        console.log(data);
      this.stateService.go('subcategory');

    }, error => {
      console.log(error._body.toString());
    });
  }

  getCategories() {
    this.categoryService.getCategories(null).subscribe( data => {
      this.availableCategories = this.categories.getCategories();
    }, error => {
       console.log(error._body.toString());
    });
  }
  
  goBack() {
    window.history.back();
  }
  
}
