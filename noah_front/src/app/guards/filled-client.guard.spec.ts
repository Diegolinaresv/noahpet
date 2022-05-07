import { TestBed } from '@angular/core/testing';

import { FilledClientGuard } from './filled-client.guard';

describe('FilledClientGuard', () => {
  let guard: FilledClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FilledClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
