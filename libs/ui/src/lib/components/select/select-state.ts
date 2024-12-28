import { Injectable, signal } from '@angular/core';

@Injectable()
export class ScSelectState {
  selectedValue = signal<unknown>(undefined);

  disabled = signal<boolean>(false);
}
