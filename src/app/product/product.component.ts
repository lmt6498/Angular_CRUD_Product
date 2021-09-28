import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

  ngOnInit(){
    this.productFormGroup = new FormGroup({
      name: new FormControl('', Validators.minLength(6)),
      img: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.min(0)),
      stock: new FormControl(0, Validators.min(0)),
      status: new FormControl(true)
    })
    console.log(this.products)
  }

  create(){
    this.productService.create(this.productFormGroup.value);
    this.productFormGroup.reset();
  }

  edit(){
    this.productService.edit(this.productFormGroup.value);
    this.productFormGroup.reset();
    this.productFormGroup.get('status')?.setValue(true);
  }

  showEdit(name: string){
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].name === name){
        this.productFormGroup.get('name')?.setValue(this.products[i].name);
        this.productFormGroup.get('img')?.setValue(this.products[i].img);
        this.productFormGroup.get('price')?.setValue(this.products[i].price);
        this.productFormGroup.get('stock')?.setValue(this.products[i].stock);
        return;
      }
    }
  }
  delete(name: any){
    this.productService.delete(name);
  }
}
