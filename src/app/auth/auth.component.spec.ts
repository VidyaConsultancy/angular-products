import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { mockLocalStorage } from '../mock/localStorage-mock';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem)
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem)
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear)
    // spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set token in localStorage', () => {
    component.login()
    expect(localStorage.getItem('token')).toEqual('alogintoken');
  })
});
