import { TestBed } from '@angular/core/testing';

import { BenfsignupService } from './benfsignup.service';

describe('BenfsignupService', () => {
  let service: BenfsignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenfsignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
