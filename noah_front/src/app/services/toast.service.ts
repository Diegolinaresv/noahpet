import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class Toast {
  constructor(public msg: string, public status: ToastType) {}
}

export enum ToastType {
  Success,
  Error,
  Warning,
  None,
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast: BehaviorSubject<Toast>;

  constructor() {
    this.toast = new BehaviorSubject<Toast>(new Toast('', ToastType.None));
  }

  getToast(): Observable<Toast> {
    return this.toast;
  }

  success(msg: string) {
    this.toast.next(new Toast(msg, ToastType.Success));
  }

  error(msg: string) {
    this.toast.next(new Toast(msg, ToastType.Error));
  }

  warning(msg: string) {
    this.toast.next(new Toast(msg, ToastType.Warning));
  }
}
