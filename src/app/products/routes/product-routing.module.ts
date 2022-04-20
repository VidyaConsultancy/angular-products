import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent as ProductAddComponent } from '../add/add.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductsComponent } from '../products/products.component';
import { AuthGuard } from 'src/app/common/guard/auth.guard';

const routes: Routes = [
  { path: 'add', component: ProductAddComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ProductDetailComponent },
  { path: '', pathMatch: 'full', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
