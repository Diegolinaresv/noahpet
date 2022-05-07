import { TestBed } from '@angular/core/testing';

import { NoahApiService } from './noah-api.service';

describe('NoahApiService', () => {
  let service: NoahApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoahApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
