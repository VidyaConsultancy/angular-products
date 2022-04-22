import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartService } from './cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have cart items', () => {
    const service = fixture.debugElement.injector.get(CartService);
    const getItemsSpy = spyOn(service, 'getItems').and.returnValue([
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Product description',
        category: 'electronics',
        image: 'https://unsplash.com/random',
        rating: { rate: 0, count: 0 },
      },
    ]);
    component.ngOnInit();
    expect(getItemsSpy).toHaveBeenCalled();
    expect(getItemsSpy).toHaveBeenCalledTimes(1);
    expect(component.cartItems.length).toBe(1);
  });
  
  it('should have cart items', () => {
    const service = fixture.debugElement.injector.get(CartService);
    spyOn(service, 'getItems').and.returnValue([
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Product description',
        category: 'electronics',
        image: 'https://unsplash.com/random',
        rating: { rate: 0, count: 0 },
      },
    ]);
    component.getCartItems();
    expect(component.cartItems.length).toBe(1);
  });
});
