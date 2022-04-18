import { Injectable } from '@angular/core';
import { TProduct } from '../products/types/product.type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: TProduct[] = [];

  constructor() {}

  getItems(): TProduct[] {
    return [...this.items];
  }

  addItem(item: TProduct) {
    this.items.push(item);
  }
}
