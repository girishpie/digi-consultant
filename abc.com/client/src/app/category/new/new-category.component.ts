import { Category } from '../category';
import { Categories } from '../categories';
import { CategoryService } from '../category.service';
import { CategoryComponent } from '../category.component';
import {StateService } from '@uirouter/angular';
import { Component, Input, OnInit } from '@angular/core';

declare var jQuery: any;
const categoryState = { name: 'category', url: '/category',  component: CategoryComponent };

@Component({
  selector: 'new-category',
  templateUrl: './new-category.component.html',
  styleUrls: []
})
export class NewCategoryComponent implements OnInit {
  private name: string;
  private description: string;

  constructor(private categoryService: CategoryService, private categories: Categories, public stateService: StateService)  {

  }

  ngOnInit() {
  }

  addNewCategory() {
    let category: Category = new Category();
    category.setName(this.name);
    category.setDescription(this.description);
    this.categoryService.save(category).subscribe(data => {
       console.log(data);
      this.stateService.go('category');

    }, error => {
      console.log(error._body.toString());
    });
  }
  
  goBack() {
    window.history.back();
  }
  
}
