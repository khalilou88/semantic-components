import { Directive, inject } from '@angular/core';

import { ScCollapsibleState } from './collapsible-state';

@Directive({
  selector: '[sc-collapsible-toggle]',
  host: {
    '(click)': 'toggle()',
  },
})
export class ScCollapsibleToggle {
  private readonly state = inject(ScCollapsibleState);

  protected toggle() {
    this.state.open.update((open) => !open);
  }
}
