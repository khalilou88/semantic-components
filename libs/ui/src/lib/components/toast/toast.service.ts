import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Toaster } from './toaster';

// Define allowed state values
export type ToastState = 'open' | 'closed' | 'closed-animation-end';

@Injectable()
export class ToastService {
  toaster!: Toaster;
  constructor(toaster: Toaster) {
    this.toaster = toaster;

    this.currentState.subscribe((v) => {
      if (v === 'closed-animation-end') {
        //TODO remove only this toast from DOM
        this.toaster.clear();
      }
    });
  }

  private readonly stateSource = new BehaviorSubject<ToastState>('open');
  currentState = this.stateSource.asObservable();

  updateState(newState: ToastState) {
    this.stateSource.next(newState);
  }

  close() {
    this.stateSource.next('closed');
  }
}
