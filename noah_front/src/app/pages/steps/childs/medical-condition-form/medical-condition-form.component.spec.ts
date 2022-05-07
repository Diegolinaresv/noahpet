import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalConditionFormComponent } from './medical-condition-form.component';

describe('MedicalConditionFormComponent', () => {
  let component: MedicalConditionFormComponent;
  let fixture: ComponentFixture<MedicalConditionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalConditionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalConditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
