import {Injectable} from "@angular/core";
import {Product} from "./product";


@Injectable()
export class Products {

  private  products: Array<Product> = new Array<Product>();
  private  totalItems: number;

  public setProducts (products: Array<Product>) {
    this.products = products;
  }
  public getProducts (): Array<Product> {
    return this.products;
  }
   public deleteProduct(productId: string) {
    let productFound: Product = this.products.find(product => productId === product.getId());
    const index: number = this.products.indexOf(productFound);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.totalItems--;
    }
  }
 public addProduct(product: Product) {
    this.products.push(product);
    this.totalItems++;
  }

  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
