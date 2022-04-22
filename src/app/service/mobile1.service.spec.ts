import { TestBed } from '@angular/core/testing';

import { Mobile1Service } from './mobile1.service';

describe('Mobile1Service', () => {
  let service: Mobile1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mobile1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
