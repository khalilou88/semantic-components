import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  contentChild,
  input,
} from '@angular/core';

import { cn } from '../../utils';
import { ScMenuButton } from './menu-button';
import { ScMenuSubTrigger } from './menu-sub-trigger';

@Component({
  selector: 'sc-menu-item',
  imports: [ScMenuButton],
  template: `
    @if (scMenuSubTrigger()) {
      <ng-content select="sc-menu-sub-trigger" />
    } @else {
      <button scMenuButton>
        <ng-content />
      </button>
    }
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [],
})
export class ScMenuItem {
  class = input<string>('');

  classes = computed(() => cn('block w-full', this.class()));

  scMenuSubTrigger = contentChild(ScMenuSubTrigger);
}
