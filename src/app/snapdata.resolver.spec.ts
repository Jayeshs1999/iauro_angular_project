import { TestBed } from '@angular/core/testing';

import { SnapdataResolver } from './snapdata.resolver';

describe('SnapdataResolver', () => {
  let resolver: SnapdataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SnapdataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
