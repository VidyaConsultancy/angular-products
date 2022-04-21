import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have operations as empty array', () => {
    expect(service.operations).toBeTruthy();
    expect(service.operations.length).toEqual(0);
  });

  it('should return sum of 10 and 20, have operations as "[\'add\']"', () => {
    const result = service.add(10, 20);
    expect(result).toEqual(30);
    expect(service.operations.length).toEqual(1);
    expect(service.operations).toEqual(['add']);
  })

  it('should return diff of 20 and 10, have operations as "[\'substract\']"', () => {
    const result = service.substract(20, 10);
    expect(result).toEqual(10);
    expect(service.operations.length).toEqual(1);
    expect(service.operations).toEqual(['substract']);
  })
});
