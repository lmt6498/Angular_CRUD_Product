import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(0, Validators.min(0)),
      name: new FormControl('', Validators.minLength(6)),
      img: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.min(0)),
      stock: new FormControl(0, Validators.min(0)),
      status: new FormControl(true)
    })
  }
  saveProduct(){
    this.productService.create(this.productForm.value);
    this.router.navigate(['/product'])
  }

}
