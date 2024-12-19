import { Injectable, signal } from '@angular/core';

@Injectable()
export class ScSelectState {
  selectedValue = signal<unknown>('');
  selectedLabel = signal<string>('');
  isOpen = signal<boolean>(false);
  closeOverlay = signal<boolean>(false);
}
