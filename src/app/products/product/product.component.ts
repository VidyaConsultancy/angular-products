import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TProduct } from '../types/product.type';
import { faTrash, faEdit, faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() public product: TProduct;
  @Input() public isDetailView: boolean;
  @Output() public productDelete: EventEmitter<number> = new EventEmitter();
  @Output() public productAdd: EventEmitter<TProduct> = new EventEmitter();

  public faEdit = faEdit;
  public faEye = faEye;
  public faCartPlus = faCartPlus;
  public faTrash = faTrash;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleDelete() {
    this.productDelete.emit(this.product.id);
  }

  handleAdd() {
    this.productAdd.emit(this.product);
  }

  showDetails() {
    this.router.navigateByUrl(`/products/${this.product.id}`, {})
  }
}
