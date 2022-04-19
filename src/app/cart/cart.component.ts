import { Component, OnInit } from '@angular/core';
import { TProduct } from '../products/types/product.type';

import { CartService } from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: TProduct[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  getCartItems() {
    this.cartItems = this.cartService.getItems();
  }
}
