import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'sc-menu-label',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMenuLabel {
  class = input<string>('');

  classes = computed(() =>
    cn('px-2 py-1.5 text-sm font-semibold', this._inset() && 'pl-8', this.class()),
  );

  readonly _inset = input<boolean, unknown>(false, {
    alias: 'inset',
    transform: booleanAttribute,
  });
}
