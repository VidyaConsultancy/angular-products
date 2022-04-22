import { Location } from '@angular/common';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
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
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'products/:id', component: ProductDetailComponent },
        ]),
      ],
      declarations: [ProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit productDelete event with product id', () => {
    const productDeleteSpy = spyOn(component.productDelete, 'emit');
    component.product = product;
    component.handleDelete();
    expect(productDeleteSpy).toHaveBeenCalledWith(product.id);
  });

  it('should emit productAdd event with product data', () => {
    const productAddSpy = spyOn(component.productAdd, 'emit');
    component.product = product;
    component.handleAdd();
    expect(productAddSpy).toHaveBeenCalledWith(product);
  });

  it('should navigate to detail page', () => {
    const location = fixture.debugElement.injector.get(Location);
    component.product = product;
    fixture.ngZone.run(
      fakeAsync(() => {
        component.showDetails();
        tick(1);
        expect(location.path()).toBe(`/products/${product.id}`);
      })
    );
  });
});
