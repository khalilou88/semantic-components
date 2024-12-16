import { Injectable, signal } from '@angular/core';

@Injectable()
export class ScRadioGroupState {
  selectedValue = signal<string | undefined>(undefined);

  disabled = signal<boolean>(false);

  name = signal<string>('');
}
