import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowInputService {
  private showN: BehaviorSubject<number>;

  constructor() {
    this.showN = new BehaviorSubject<number>(0);
  }

  getInputN() {
    return this.showN.value;
  }

  showNext(n: number) {
    this.showN.next(n);
  }

  reset() {
    this.showN.next(0);
  }
}
