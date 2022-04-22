import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ProductService } from '../product.service';
import { EditComponent } from './edit.component';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
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
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'products', component: ProductsComponent },
        ]),
      ],
      declarations: [EditComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1 }).pipe(delay(1)) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init add product form group', () => {
    expect(component.productForm).toBeTruthy();
  });

  it('should have productForm invalid', () => {
    expect(component.productForm.invalid).toBeTrue();
  });

  it('should have productForm title field invalid', () => {
    expect(component.productForm.controls['title'].invalid).toBeTrue();
  });

  it('should have productForm description field invalid', () => {
    expect(component.productForm.controls['description'].invalid).toBeTrue();
  });

  it('should have productForm category field invalid', () => {
    expect(component.productForm.controls['category'].invalid).toBeTrue();
  });

  it('should have productForm price field invalid', () => {
    expect(component.productForm.controls['price'].invalid).toBeTrue();
  });

  it('should have price in range 10-999', () => {
    component.productForm.controls['price'].setValue(9);
    expect(component.productForm.controls['price'].errors).toBeTruthy();
    component.productForm.controls['price'].setValue(1000);
    expect(component.productForm.controls['price'].errors).toBeTruthy();
  });

  it('should have productForm image field invalid', () => {
    expect(component.productForm.controls['image'].invalid).toBeFalse();
  });

  it('should render disabled submit button', () => {
    const compiled = fixture.nativeElement;
    const submitBtn = compiled.querySelector('button[type="submit"]');
    expect(submitBtn).toBeTruthy();
    expect(submitBtn.textContent).toContain('Submit');
    expect(submitBtn.getAttribute('disabled')).toBeDefined();
  });

  it('should invoke handleSubmit method', () => {
    const debugElement = fixture.debugElement;
    const form = debugElement.query(By.css('form.product-edit-form'));
    const handleSubmitSpy = spyOn(component, 'handleSubmit');
    form.triggerEventHandler('submit', null);
    expect(handleSubmitSpy).toHaveBeenCalled();
    expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
  });

  it('should return undefined as productForm invalid', () => {
    const service: ProductService =
      fixture.debugElement.injector.get(ProductService); // injecting a dependency

    const result = component.handleSubmit({
      preventDefault: () => {},
    } as MouseEvent);
    expect(result).toBeUndefined();
  });

  it('should call editProduct service', () => {
    const service: ProductService =
      fixture.debugElement.injector.get(ProductService); // injecting a dependency
    const editProductSpy = spyOn(service, 'editProduct').and.returnValue(
      of(product)
    );
    component.productForm.controls.id.setValue(1);
    component.productForm.controls.title.setValue('A valid title');
    component.productForm.controls.price.setValue(99.99);
    component.productForm.controls.description.setValue('A valid description');
    component.productForm.controls.category.setValue('electronics');
    component.productForm.controls.image.setValue(
      'https://unsplash.com/random'
    );

    component.productId = product.id;
    fixture.ngZone.run(() => {
      component.handleSubmit({ preventDefault: () => {} } as MouseEvent);
      expect(editProductSpy).toHaveBeenCalled();
      expect(editProductSpy).toHaveBeenCalledTimes(1);
      expect(editProductSpy).toHaveBeenCalledWith(product.id, product);
    })
  });

  it('should have patched form values', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(ProductService);
    const getDetailSpy = spyOn(service, 'getProductDetailById')
      .withArgs(product.id)
      .and.returnValue(of(product).pipe(delay(1)));

    component.ngOnInit();
    tick(2);
    expect(getDetailSpy).toHaveBeenCalled();
    expect(getDetailSpy).toHaveBeenCalledTimes(1);
    expect(getDetailSpy).toHaveBeenCalledWith(1);
    expect(component.productForm.value.id).toBe(product.id);
    expect(component.productForm.value.title).toBe(product.title);
  }));
});
