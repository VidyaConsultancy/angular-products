import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { ProductMockService } from './product-mock.service';
import { environment } from 'src/environments/environment';

describe('ProductMockService', () => {
  let service: ProductMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be observable of TProduct[]', () => {
    service.fetchAll().subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data[0].id).toBe(1);
      expect(data[0].title).toBe('Product 1');
    });
  });

  it('should be observable of TProduct [addProduct]', () => {
    service
      .addProduct({
        title: 'Product 1',
        price: 10,
        image: 'https://unsplash.com/random',
        description: 'Product description',
        category: 'electronics',
      })
      .subscribe((data) => {
        expect(data.id).toBe(1);
        expect(data.title).toBe('Product 1');
        expect(data.rating.rate).toBe(0);
      });
  });

  it('should be observable of TProduct [editProduct]', () => {
    service
      .editProduct(1, {
        id: 1,
        title: 'Product 1',
        price: 10,
        image: 'https://unsplash.com/random',
        description: 'Product description',
        category: 'electronics',
        rating: { rate: 0, count: 0 },
      })
      .subscribe((data) => {
        expect(data.id).toBe(1);
        expect(data.title).toBe('Product 1');
        expect(data.rating.rate).toBe(0);
      });
  });

  it('should be observable of TProduct [getProductDetailById]', () => {
    service.getProductDetailById(1).subscribe((data) => {
      expect(data.id).toBe(1);
      expect(data.title).toBe('Product 2');
      expect(data.rating.rate).toBe(0);
    });
  });

  it('should be observable of TProduct [deleteProduct]', () => {
    service.removeProduct(1).subscribe((data) => {
      expect(data.id).toBe(1);
      expect(data.title).toBe('Product 2');
      expect(data.rating.rate).toBe(0);
    });
  });
});

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const baseUrl: string = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be GET call', () => {
    service.fetchAll().subscribe((data) => {});

    const mockCall = httpMock.expectOne({
      url: `${baseUrl}/products`,
      method: 'GET',
    });

    expect(mockCall.cancelled).toBeFalsy();
    expect(mockCall.request.responseType).toBe('json');
  });

  it('should be POST call', () => {
    service
      .addProduct({
        title: 'Product 1',
        price: 10,
        image: 'https://unsplash.com/random',
        description: 'Product description',
        category: 'electronics',
      })
      .subscribe((data) => {});

    const mockCall = httpMock.expectOne({
      url: `${baseUrl}/products`,
      method: 'POST',
    });

    expect(mockCall.cancelled).toBeFalsy();
    expect(mockCall.request.responseType).toBe('json');
  });

  it('should be PUT call', () => {
    const id = 1;
    service
      .editProduct(id, {
        id,
        title: 'Product 1',
        price: 10,
        image: 'https://unsplash.com/random',
        description: 'Product description',
        category: 'electronics',
        rating: { rate: 0, count: 0}
      })
      .subscribe((data) => {});

    const mockCall = httpMock.expectOne({
      url: `${baseUrl}/products/${id}`,
      method: 'PUT',
    });

    expect(mockCall.cancelled).toBeFalsy();
    expect(mockCall.request.responseType).toBe('json');
  });

  it('should be DELETE call', () => {
    const id = 1;
    service
      .removeProduct(id)
      .subscribe((data) => {});

    const mockCall = httpMock.expectOne({
      url: `${baseUrl}/products/${id}`,
      method: 'DELETE',
    });

    expect(mockCall.cancelled).toBeFalsy();
    expect(mockCall.request.responseType).toBe('json');
  });
});
