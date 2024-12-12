import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';
import { ScNavButtonBase } from './nav-button-base';

@Component({
  selector: 'button[sc-nav-button]',
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
export class ScNavButton extends ScNavButtonBase {
  class = input<string>('');

  classes = computed(() => cn(this.baseClass(), this.class()));
}
