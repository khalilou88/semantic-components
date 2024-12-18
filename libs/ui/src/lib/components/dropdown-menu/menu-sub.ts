import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'sc-menu-sub',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '(click)': 'open()',
    '(mouseover)': 'open()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMenuSub {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  open() {
    console.log('open sub menu');
  }
}
