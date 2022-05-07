import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  private step: BehaviorSubject<number>;

  constructor() {
    this.step = new BehaviorSubject<number>(1);
  }

  getStep(): Observable<number> {
    return this.step;
  }

  nextStep() {
    this.step.next(this.step.value + 1);
  }

  setStep(number: number): void {
    this.step.next(number);
  }
}
