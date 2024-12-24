import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScCommand } from './command';

@Component({
  selector: 'sc-command-dialog',
  imports: [ScCommand],
  template: `
    <sc-command class="">
      <ng-content />
    </sc-command>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCommandDialog {
  class = input<string>('');

  classes = computed(() => cn('block overflow-hidden p-0 shadow-lg', this.class()));
}
