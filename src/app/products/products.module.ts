import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule],
  exports: [ProductsComponent]
})
export class ProductsModule {}
