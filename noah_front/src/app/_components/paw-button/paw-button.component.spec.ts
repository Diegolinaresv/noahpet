import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawButtonComponent } from './paw-button.component';

describe('PawButtonComponent', () => {
  let component: PawButtonComponent;
  let fixture: ComponentFixture<PawButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PawButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PawButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
