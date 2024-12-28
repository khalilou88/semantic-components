import { Injectable, signal } from '@angular/core';

@Injectable()
export class ScSelectState {
  //1 undefined for init
  //2 selected value
  //3 null nothing selected
  value = signal<unknown>(undefined);

  disabled = signal<boolean>(false);
}
