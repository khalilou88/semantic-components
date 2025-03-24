import { Injectable, linkedSignal, signal } from '@angular/core';

@Injectable()
export class ScAccordionItemState {
  readonly open = signal(false);

  readonly state = linkedSignal(() => (this.open() ? 'open' : 'closed'));
}
