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
  selector: 'a[sc-nav-link]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    routerLinkActive: 'active-page',
    ariaCurrentWhenActive: 'page',
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavLink extends ScNavButtonBase {
  class = input<string>('');

  classes = computed(() => cn(this.baseClass(), this.class()));
}
