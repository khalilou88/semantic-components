import { EventEmitter } from '@angular/core';

export abstract class CustomControl<T> {
  abstract value?: T;
  abstract valueChange: EventEmitter<T>;
}
