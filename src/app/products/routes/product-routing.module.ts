import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent as ProductAddComponent } from '../add/add.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [
  { path: 'add', component: ProductAddComponent },
  { path: ':id', component: ProductDetailComponent },
  { path: '', pathMatch: 'full', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
