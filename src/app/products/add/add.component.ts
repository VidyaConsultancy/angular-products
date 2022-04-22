import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.createProductForm();
  }

  ngOnInit(): void {}

  createProductForm() {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: [
        null,
        [Validators.required, Validators.min(10), Validators.max(999)],
      ],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: [
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        Validators.required,
      ],
    });
  }

  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.productForm.invalid) {
      return;
    }
    this.productService
      .addProduct({ ...this.productForm.value })
      .subscribe((data) => {
        this.productForm.reset();
      });
  }
}
