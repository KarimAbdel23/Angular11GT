import { TestBed } from '@angular/core/testing';

import { MotherboardsHttpService } from './motherboards-http.service';

describe('MotherboardsHttpService', () => {
  let service: MotherboardsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotherboardsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
