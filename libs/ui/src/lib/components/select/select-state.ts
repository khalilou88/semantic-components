import { Injectable, signal } from '@angular/core';

import { ScOptionModel } from './option-model';

@Injectable()
export class ScSelectState {
  selectedOption = signal<ScOptionModel | undefined>(undefined);
  isOpen = signal<boolean>(false);
  closeOverlay = signal<boolean>(false);
}
