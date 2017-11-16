import { Product } from '../product';
import { Products } from '../products';
import { ProductService } from '../product.service';
import { Section } from '../../section/section';
import { Sections } from '../../section/sections';
import { SectionService } from '../../section/section.service';
import { Category } from '../../category/category';
import { Categories } from '../../category/categories';
import { CategoryService } from '../../category/category.service';
import { Component, Input, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'new-product',
  templateUrl: './new-product.component.html',
  styleUrls: []
})
export class NewProductComponent implements OnInit {
   private availableSections: Section[];
   private sectionId: string;
   private availableCategories: Category[];
   private categoryId: string;
  private name: string;
  private quantity: number;
  private amount: number;
  private bimId: string;
  private unit: string;
  private description: string;

  constructor(private sectionService: SectionService, private productService: ProductService, private categoryService: CategoryService,
              private products: Products, private sections: Sections, private categories: Categories)  {

  }

  ngOnInit() {
     this.getSections();
    this.getCategories();
  }

  addNewProduct() {
    let product: Product = new Product();
    product.setSectionId(this.sectionId);
    product.setCategoryId(this.categoryId);
    product.setName(this.name);
    product.setAmount(this.amount);
    product.setBimId(this.bimId);
    product.setDescription(this.description);
    product.setUnit(this.unit);
    product.setQuantity(this.quantity);
    this.productService.save(product).subscribe(data => {
        console.log(data);
        product.setId(data);
        this.products.addProduct(product);
      jQuery('.modal').modal('toggle');

    }, error => {
      console.log(error._body.toString());
    });
  }

  getSections() {
    this.sectionService.getSections(null).subscribe( data => {
      this.availableSections = this.sections.getSections();
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
}
