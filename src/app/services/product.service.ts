import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  constructor(private http: HttpClient) {
    this.products.push(new Product(1, "Iphone 11","https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",12,12,true));
    this.products.push(new Product(2,"Iphone 11","https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",12,12,true));
    this.products.push(new Product(3,"Iphone 11","https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",12,12,true));
    this.products.push(new Product(4,"Iphone 12","https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",12,12, false));
    this.products.push(new Product(5,"Iphone 13","https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",12,12, true));

  }
  getProduct() {
    return this.http.get<Product[]>('http://localhost:8080/api/products').subscribe((data) => {
      this.products = data;
    })

  }

  delete(id:any) {
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id === id){
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
  findById(id: number | undefined) {
    return this.products.find(product =>
      product.id === id
    )

  }
  showEdit(id: number | undefined, product: any) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
       return this.products[i] = product;
      }
    }
  }
}
