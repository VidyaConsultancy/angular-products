import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TProduct } from '../types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() public product: TProduct;
  @Output() public productDelete: EventEmitter<number> = new EventEmitter();
  @Output() public productAdd: EventEmitter<TProduct> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleDelete() {
    this.productDelete.emit(this.product.id);
  }

  handleAdd() {
    this.productAdd.emit(this.product);
  }
}
