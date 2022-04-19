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
      id: [this.generateARandomId(), Validators.required],
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
      rating: this.fb.group({
        rate: [0],
        count: [0],
      }),
    });
    console.log(this.productForm);
    this.productForm.get('title').valueChanges.subscribe((value) => {});
  }

  generateARandomId(min: number = 1000, max: number = 9999) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.productForm.invalid) {
      console.log('Invalid title value');
      return;
    }
    this.productService.addProduct({...this.productForm.value});
    this.productForm.reset();
  }
}
