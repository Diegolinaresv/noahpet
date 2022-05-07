import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFoodComponent } from './pet-food.component';

describe('PetFoodComponent', () => {
  let component: PetFoodComponent;
  let fixture: ComponentFixture<PetFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
