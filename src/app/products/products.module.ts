import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductRoutingModule } from './routes/product-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AddComponent } from './add/add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    AddComponent,
    ProductDetailComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    FontAwesomeModule,
  ],
  exports: [],
})
export class ProductsModule {}
