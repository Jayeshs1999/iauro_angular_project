import { TestBed } from '@angular/core/testing';

import { CustomerloadGuard } from './customerload.guard';

describe('CustomerloadGuard', () => {
  let guard: CustomerloadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomerloadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
