import { Component, OnInit } from '@angular/core';

import { TProduct } from '../types/product.type';
import { CartService } from 'src/app/cart/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: TProduct[];
  alert: { type: string; message: string } = {
    type: 'alert-success',
    message: '',
  };

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const observable = this.productService.fetchAll();
    observable.subscribe(
      (data) => {
        this.alert.type = 'alert-success';
        this.alert.message = 'Product list fetched successfully';
        this.products = data;
      },
      (error) => {
        this.alert.type = 'alert-danger';
        this.alert.message =
          'Error while fetching the products list. ' + error.message;
        console.error('Error while fetching the products list', error);
      }
    );
    // this.productService.fetchAll().subscribe((data) => {
    //   this.products = data;
    // });
  }

  handleProductAdd(product: TProduct) {
    this.cartService.addItem(product);
  }

  handleProductDelete(id: number) {
    this.productService.removeProduct(id).subscribe((data) => {
      this.products = this.products.filter((product) => product.id !== data.id);
    });
  }
}
