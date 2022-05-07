import { TestBed } from '@angular/core/testing';

import { EmptyDonePetsGuard } from './empty-done-pets.guard';

describe('EmptyDonePetsGuard', () => {
  let guard: EmptyDonePetsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmptyDonePetsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
