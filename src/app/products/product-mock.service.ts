import { Injectable } from '@angular/core';

import { TAddProduct, TProduct } from './types/product.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductMockService {
  public fetchAll(): Observable<TProduct[]> {
    return of([
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Product description',
        category: 'electronics',
        image: 'https://unsplash.com/random',
        rating: { rate: 0, count: 0 },
      },
      {
        id: 2,
        title: 'Product 2',
        price: 10,
        description: 'Product description',
        category: 'electronics',
        image: 'https://unsplash.com/random',
        rating: { rate: 0, count: 0 },
      },
    ]);
  }

  public addProduct(product: TAddProduct): Observable<TProduct> {
    return of({
      id: 1,
      ...product,
      rating: { rate: 0, count: 0 },
    });
  }

  public removeProduct(id: number): Observable<TProduct> {
    return of({
      id,
      title: 'Product 2',
      price: 10,
      description: 'Product description',
      category: 'electronics',
      image: 'https://unsplash.com/random',
      rating: { rate: 0, count: 0 },
    });
  }

  public getProductDetailById(id: number): Observable<TProduct> {
    return of({
      id,
      title: 'Product 2',
      price: 10,
      description: 'Product description',
      category: 'electronics',
      image: 'https://unsplash.com/random',
      rating: { rate: 0, count: 0 },
    });
  }

  public editProduct(id: number, data: TProduct): Observable<TProduct> {
    return of({
        id,
        ...data
    })
  }
}
