import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
// import {ProductService} from "../services/product.service";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productFormGroup!: FormGroup

  products: Product[] = [];


  constructor(private productService: ProductService) {
    this.products = productService.products;
  }

  ngOnInit() {
    this.productFormGroup = new FormGroup({
      name: new FormControl('', Validators.minLength(6)),
      img: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.min(0)),
      stock: new FormControl(0, Validators.min(0)),
      status: new FormControl(true)
    })
    console.log(this.products)
  }

  // getProduct() {
  //   return this.http.get<Product[]>('http://localhost:8080/api/products').subscribe((data) => {
  //     this.products = data;
  //   })
  //
  // }

  // create(){
  //   this.productService.create(this.productFormGroup.value);
  //   this.productFormGroup.reset();
  // }
  //
  // edit(){
  //   this.productService.edit(this.productFormGroup.value);
  //   this.productFormGroup.reset();
  //   this.productFormGroup.get('status')?.setValue(true);
  // }

  delete(id: any){
    this.productService.delete(id);
  }
}
