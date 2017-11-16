import { Category } from '../category';
import { Categories } from '../categories';
import { CategoryService } from '../category.service';

import { Component, Input, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'new-category',
  templateUrl: './new-category.component.html',
  styleUrls: []
})
export class NewCategoryComponent implements OnInit {
  private name: string;
  private description: string;

  constructor(private categoryService: CategoryService, private categories: Categories)  {

  }

  ngOnInit() {
  }

  addNewCategory() {
    let category: Category = new Category();
    category.setName(this.name);
    category.setDescription(this.description);
    this.categoryService.save(category).subscribe(data => {
        console.log(data);
      jQuery('.modal').modal('toggle');

    }, error => {
      console.log(error._body.toString());
    });
  }
}
