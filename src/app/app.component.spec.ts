import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { mockLocalStorage } from './mock/localStorage-mock';
import { ProductsComponent } from './products/products/products.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: AppComponent },
          { path: 'products', component: ProductsComponent },
          { path: 'auth', component: AuthComponent },
          { path: 'cart', component: CartComponent },
        ]),
        HttpClientTestingModule
      ],
      declarations: [AppComponent, AuthComponent, CartComponent, ProductsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
    // spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    fixture.ngZone.run(() => {
      router.initialNavigation();
    })
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'products'`, () => {
    expect(component.title).toEqual('products');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.logo').textContent).toContain('products');
  });

  it('should clear localStorage', () => {
    component.logout();
    expect(localStorage.getItem('token')).toBeNull();
  });

  it('should navigate to Landing Page', () => {
    fixture.ngZone.run(
      fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/');
      })
    );
  });

  it('should navigate to Auth Page', () => {
    fixture.ngZone.run(
      fakeAsync(() => {
        router.navigate(['/auth']);
        tick();
        expect(location.path()).toBe('/auth');
      })
    );
  });

  it('should navigate to Products Page', () => {
    fixture.ngZone.run(
      fakeAsync(() => {
        router.navigate(['/products']);
        tick();
        expect(location.path()).toBe('/products');
      })
    );
  });

  it('should navigate to Cart Page', () => {
    fixture.ngZone.run(
      fakeAsync(() => {
        router.navigate(['/cart']);
        tick();
        expect(location.path()).toBe('/cart');
      })
    );
  });
});
