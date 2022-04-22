import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have one item', () => {
    service.addItem({
      id: 1,
      title: 'Product 1',
      price: 10,
      description: 'Product description',
      category: 'electronics',
      image: 'https://unsplash.com/random',
      rating: { rate: 0, count: 0 },
    });
    expect(service.getItems().length).toBe(1);
  })
});
