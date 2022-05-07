import { TestBed } from '@angular/core/testing';

import { ShowInputService } from './show-input.service';

describe('ShowInputService', () => {
  let service: ShowInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
