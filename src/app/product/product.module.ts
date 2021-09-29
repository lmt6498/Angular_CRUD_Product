import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import {ProductComponent} from "./product.component";
import {ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    CreateProductComponent, ProductComponent, EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
