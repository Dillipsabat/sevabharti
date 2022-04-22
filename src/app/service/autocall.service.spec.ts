import { TestBed } from '@angular/core/testing';

import { AutocallService } from './autocall.service';

describe('AutocallService', () => {
  let service: AutocallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
