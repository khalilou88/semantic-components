import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

// Define allowed state values
export type ToastState = 'open' | 'closed' | 'closed-animation-end';

@Injectable()
export class ToastService {
  private readonly stateSource = new BehaviorSubject<ToastState>('open');
  currentState = this.stateSource.asObservable();

  updateState(newState: ToastState) {
    this.stateSource.next(newState);
  }
}
