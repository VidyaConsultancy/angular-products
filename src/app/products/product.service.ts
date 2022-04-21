import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TAddProduct, TProduct } from './types/product.type';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public fetchAll(): Observable<TProduct[]> {
    const observable = this.http.get<TProduct[]>(`${this.baseUrl}/products`);
    return observable;
    // return this.http.get<TProduct[]>(`${this.baseUrl}/products`)
  }

  public addProduct(product: TAddProduct): Observable<TProduct> {
    return this.http.post<TProduct>(`${this.baseUrl}/products`, product);
  }
  
  public removeProduct(id: number): Observable<TProduct> {
    return this.http.delete<TProduct>(`${this.baseUrl}/products/${id}`);
  }

  public getProductDetailById(id: number): Observable<TProduct> {
    return this.http.get<TProduct>(`${this.baseUrl}/products/${id}`);
  }

  public editProduct(id: number, data: TProduct): Observable<TProduct> {
    return this.http.put<TProduct>(`${this.baseUrl}/products/${id}`, data);
  }
}
