import { Component, OnInit } from '@angular/core';

import { TProduct } from '../types/product.type';
import { AppService } from 'src/app/app.service';
import { CartService } from 'src/app/cart/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: TProduct[];

  constructor(private appService: AppService, private cartService: CartService, private productService: ProductService) {
    const sum = this.appService.add(10, 20);
    const diff = this.appService.substract(10, 20);
    console.log(sum, diff, this.appService.operations);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getOps() {
    console.log(this.appService.operations);
  }

  handleProductAdd(product: TProduct) {
    this.cartService.addItem(product);
  }

  handleProductDelete(id: number) {
    this.productService.removeProduct(id);
    this.products = this.productService.getProducts();
  }
}
