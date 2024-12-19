import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '../../utils';
import { ScCollapsibleState } from './collapsible-state';

@Component({
  selector: 'sc-collapsible-trigger',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCollapsibleTrigger {
  state = inject(ScCollapsibleState);

  class = input<string>('');

  classes = computed(() => cn('block', this.class()));

  toggle() {
    this.state.isToggled.next();
  }
}
