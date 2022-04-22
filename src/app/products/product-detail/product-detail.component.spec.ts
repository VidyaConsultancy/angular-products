import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component';
import { ProductDetailComponent } from './product-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartService } from 'src/app/cart/cart.service';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  const product = {
    id: 1,
    title: 'A valid title',
    price: 99.99,
    description: 'A valid description',
    category: 'electronics',
    image: 'https://unsplash.com/random',
    rating: { rate: 0, count: 0 },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FontAwesomeModule],
      declarations: [ProductDetailComponent, ProductComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1 }).pipe(delay(1)) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data by id', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(ProductService);
    const getDetailSpy = spyOn(service, 'getProductDetailById')
      .withArgs(1)
      .and.returnValue(of(product).pipe(delay(1)));

    component.ngOnInit();
    tick(2);
    expect(getDetailSpy).toHaveBeenCalled();
    expect(component.product).toBe(product);
  }));

  it('should have [app-product] in template', fakeAsync(() => {
    component.product = product;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-product'))).toBeTruthy();
  }));

  it('should have isDetailView as true', fakeAsync(() => {
    component.product = product;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('app-product')).attributes[
        'ng-reflect-is-detail-view'
      ]
    ).toBe('true');
  }));

  it('should invoked handleProductAdd on productAdd event', fakeAsync(() => {
    component.product = product;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-product'))).toBeTruthy();
  }));

  it('should invoked addItem service method', fakeAsync(() => {
    const cartService = fixture.debugElement.injector.get(CartService);
    const addItemSpy = spyOn(cartService, 'addItem');
    component.handleProductAdd(product);

    expect(addItemSpy).toHaveBeenCalledWith(product);
  }));
});
