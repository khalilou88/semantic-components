import { Injectable, signal } from '@angular/core';

@Injectable()
export class ScSelectState {
  selectedValue = signal<string>('');
  selectedLabel = signal<string>('');
}
