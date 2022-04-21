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
  alert: {type: string, message: string} = {type: 'alert-success', message: ''}

  constructor(private appService: AppService, private cartService: CartService, private productService: ProductService) {
    const sum = this.appService.add(10, 20);
    const diff = this.appService.substract(10, 20);
    console.log(sum, diff, this.appService.operations);
  }

  ngOnInit(): void {
    const observable = this.productService.fetchAll();
    observable.subscribe((data) => {
      this.alert.type = 'alert-success';
      this.alert.message = 'Product list fetched successfully';
      this.products = data;
    }, (error) => {
      this.alert.type = 'alert-danger';
      this.alert.message = 'Error while fetching the products list. ' + error.message;
      console.error('Error while fetching the products list', error);
    });
    // this.productService.fetchAll().subscribe((data) => {
    //   this.products = data;
    // });
  }

  getOps() {
    console.log(this.appService.operations);
  }

  handleProductAdd(product: TProduct) {
    this.cartService.addItem(product);
  }

  handleProductDelete(id: number) {
    this.productService.removeProduct(id).subscribe((data) => {
      this.products = this.products.filter(product => product.id !== data.id);
    });
  }
}
