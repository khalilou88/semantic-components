import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed } from '@angular/core';

import { ScButtonBase } from '../button';

@Component({
  selector: 'a[sc-link]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'link',
    '[tabindex]': 'tabindex()', //make the link focusable in case don't have href
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLink extends ScButtonBase {
  protected readonly tabindex = computed(() => {
    if (this.disabled()) {
      return -1;
    }

    return 0;
  });
}
