import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'label[sc-label]',
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
export class ScLabel {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      this.class(),
    ),
  );
}
