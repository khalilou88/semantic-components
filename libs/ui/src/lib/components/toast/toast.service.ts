import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

// Define allowed state values
export type ToastState = 'open' | 'closed';

@Injectable()
export class ToastService {
  private readonly stateSource = new Subject<ToastState>();
  currentState = this.stateSource.asObservable();

  updateState(newState: ToastState) {
    this.stateSource.next(newState);
  }
}
