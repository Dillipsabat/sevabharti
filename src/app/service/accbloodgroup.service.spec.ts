import { TestBed } from '@angular/core/testing';

import { AccbloodgroupService } from './accbloodgroup.service';

describe('AccbloodgroupService', () => {
  let service: AccbloodgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccbloodgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
