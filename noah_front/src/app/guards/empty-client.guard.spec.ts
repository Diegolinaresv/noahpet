import { TestBed } from '@angular/core/testing';

import { EmptyClientGuard } from './empty-client.guard';

describe('EmptyClientGuard', () => {
  let guard: EmptyClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmptyClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
