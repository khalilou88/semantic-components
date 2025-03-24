import { Injectable, computed, signal } from '@angular/core';

@Injectable()
export class ScAccordionItemState {
  readonly open = signal(false);

  readonly state = computed(() => (this.open() ? 'open' : 'closed'));
}
