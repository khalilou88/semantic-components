import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'ul[sc-nav-list]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    dir: 'ltr',
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavList {
  class = input<string>('');

  classes = computed(() =>
    cn('flex flex-1 list-none items-center justify-center space-x-1', this.class()),
  );
}
