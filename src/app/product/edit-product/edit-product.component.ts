import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm!: FormGroup;
  id!: number;
  constructor(private productService: ProductService,private activeRouter: ActivatedRoute,private router: Router) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'));
      const product = this.getProduct(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(product?.id, Validators.min(0)),
        name: new FormControl(product?.name, Validators.minLength(6)),
        img: new FormControl(product?.img, Validators.required),
        price: new FormControl(product?.price, Validators.min(0)),
        stock: new FormControl(product?.stock, Validators.min(0)),
        status: new FormControl(product?.status)
      })
    });
  }

  ngOnInit(): void {

  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  edit(id:number){
    const product = this.productForm.value;
    this.productService.showEdit(id, product);
    this.router.navigate(['/product'])
  }
}
