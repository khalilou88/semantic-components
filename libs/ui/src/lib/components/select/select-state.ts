import { Injectable, signal } from '@angular/core';

import { ScSelectModel } from './select-model';

@Injectable()
export class ScSelectState {
  selectedOption = signal<ScSelectModel | undefined>(undefined);
  isOpen = signal<boolean>(false);
  closeOverlay = signal<boolean>(false);
}
