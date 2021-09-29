import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateProductComponent} from "./create-product/create-product.component";
import {ProductComponent} from "./product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

const routes: Routes = [
  {
    path: 'create',component:CreateProductComponent
  },
  {
    path: '',component:ProductComponent
  },
  {
    path: 'edit/:id',component:EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
