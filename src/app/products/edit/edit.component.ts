import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  productForm: FormGroup;
  productId: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createProductForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params.id;
      this.productService
        .getProductDetailById(+this.productId)
        .subscribe((data) => {
          this.productForm.controls['id'].patchValue(data.id);
          this.productForm.controls['title'].patchValue(data.title);
          this.productForm.controls['price'].patchValue(data.price);
          this.productForm.controls['description'].patchValue(data.description);
          this.productForm.controls['category'].patchValue(data.category);
          this.productForm.controls['image'].patchValue(data.image);
          this.productForm.get('rating').get('rate').patchValue(data.rating.rate);
          this.productForm.get('rating').get('count').patchValue(data.rating.count);
        });
    });
  }

  createProductForm() {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
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
        count: 0,
        rate: 0,
      })
    });
    this.productForm.get('title').valueChanges.subscribe((value) => {});
  }

  handleSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.productForm.invalid) {
      return;
    }
    this.productService
      .editProduct(this.productId, { ...this.productForm.value })
      .subscribe((data) => {
        this.productForm.reset();
        this.router.navigateByUrl('/products');
      });
  }
}
