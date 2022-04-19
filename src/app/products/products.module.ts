import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AddComponent } from './add/add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [];

@NgModule({
  declarations: [ProductsComponent, ProductComponent, AddComponent, ProductDetailComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [ProductsComponent]
})
export class ProductsModule {}
