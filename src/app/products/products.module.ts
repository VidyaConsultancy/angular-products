import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProductsComponent]
})
export class ProductsModule {}
