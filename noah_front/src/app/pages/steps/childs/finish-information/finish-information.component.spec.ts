import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishInformationComponent } from './finish-information.component';

describe('FinishInformationComponent', () => {
  let component: FinishInformationComponent;
  let fixture: ComponentFixture<FinishInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
