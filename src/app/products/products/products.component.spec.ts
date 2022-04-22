import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ProductService } from '../product.service';
import { CartService } from 'src/app/cart/cart.service';
import { ProductsComponent } from './products.component';
import { ProductComponent } from '../product/product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FontAwesomeModule],
      declarations: [ProductsComponent, ProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render 'No records found'`, () => {
    const noRecord = debugElement.query(By.css('#no-records'));
    expect(noRecord).toBeTruthy();
    expect(noRecord.nativeElement.textContent).toEqual('No record found');
    const appProduct = debugElement.query(By.css('app-product'));
    expect(appProduct).toBeNull();
  });

  it(`should call fetchAll & should have data in products`, fakeAsync (() => {
    const service = debugElement.injector.get(ProductService);
    const fetchAllSpy = spyOn(service, 'fetchAll').and.returnValue(
      of([
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
      ]).pipe(delay(1))
    );

    component.ngOnInit();
    tick(1)
    
    expect(fetchAllSpy).toHaveBeenCalled();
    expect(fetchAllSpy).toHaveBeenCalledTimes(1);
    expect(component.products).toBeTruthy();
    expect(component.alert.type).toContain('success');
    expect(component.alert.message).toEqual(
      'Product list fetched successfully'
    );
  }));

  it(`should render [app-product] comp`, fakeAsync (() => {
    const service = debugElement.injector.get(ProductService);
    spyOn(service, 'fetchAll').and.returnValue(
      of([
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
      ]).pipe(delay(1))
    );

    component.ngOnInit();
    tick(1)
    
    fixture.detectChanges();
    expect(debugElement.query(By.css('#no-records'))).toBeNull();
    const appProduct = debugElement.queryAll(By.css('app-product'));
    expect(appProduct).toBeTruthy();
    expect(appProduct.length).toBe(2);
    expect(appProduct[0].query(By.css('.product__title')).nativeElement.textContent).toContain('Product 1');
  }));

  it(`should render [app-product] comp`, () => {
    component.products = [
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
    ];
    
    fixture.detectChanges();
    const appProduct = debugElement.query(By.css('app-product'));
    const handleProductDeleteSpy = spyOn(component, 'handleProductDelete');
    appProduct.triggerEventHandler('productDelete', 11);
    expect(handleProductDeleteSpy).toHaveBeenCalled();
    expect(handleProductDeleteSpy).toHaveBeenCalledTimes(1);
    expect(handleProductDeleteSpy).toHaveBeenCalledWith(11);
  });
});
