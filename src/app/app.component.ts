import { Component } from '@angular/core';
import {Product} from "./models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-product';
  products: Product[] = [];

  constructor() {
    this.products.push(new Product("Iphone 11","https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",12,12,true));
    this.products.push(new Product("Iphone 11","https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",12,12,true));
    this.products.push(new Product("Iphone 11","https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",12,12,true));
    this.products.push(new Product("Iphone 12","https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",12,12, false));
    this.products.push(new Product("Iphone 13","https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",12,12, true));
  }
  delete(name:any) {
    for (let i = 0; i < this.products.length; i++) {
        if(this.products[i].name === name){
          this.products.splice(i, 1);
          return;
        }
    }
  }

  create(product: Product) {
    this.products.push(product);
  }

  edit(product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].name === product.name){
        this.products[i] = product;
      }
    }

  }

}
