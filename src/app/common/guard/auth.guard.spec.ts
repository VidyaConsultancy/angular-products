import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { mockLocalStorage } from '../../mock/localStorage-mock';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
    // spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
  });
  
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  
  it('should navigate with token', () => {
    localStorage.setItem('token', 'alogintoken');
    expect(guard.canActivate(null, null)).toBeTrue();
  });
  
  it('should not navigate without token', () => {
    localStorage.clear();
    expect(guard.canActivate(null, null)).toBeFalse();
  });
});
