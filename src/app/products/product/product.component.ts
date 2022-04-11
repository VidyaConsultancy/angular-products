import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TProduct } from '../types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input('product') product: TProduct;
  @Output('delete') productDelete: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleDelete() {
    console.log(this.product.id);
    this.productDelete.emit(this.product.id);
  }
}
