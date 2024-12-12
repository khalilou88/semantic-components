import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'sc-tab',
  imports: [],
  template: `
    @if (active()) {
      <ng-content />
    }
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTab {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  active = signal<boolean>(false);
}
