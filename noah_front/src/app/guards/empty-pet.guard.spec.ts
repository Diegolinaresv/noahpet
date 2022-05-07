import { TestBed } from '@angular/core/testing';

import { EmptyPetGuard } from './empty-pet.guard';

describe('EmptyPetGuard', () => {
  let guard: EmptyPetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmptyPetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
