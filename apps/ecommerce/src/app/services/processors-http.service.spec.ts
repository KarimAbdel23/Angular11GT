import { TestBed } from '@angular/core/testing';

import { ProcessorsHttpService } from './processors-http.service';

describe('ProcessorsHttpService', () => {
  let service: ProcessorsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessorsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
