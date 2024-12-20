import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from './constants';

@Component({
  selector: 'sc-sidebar-provider',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '[style]': 'styles()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ScSidebarProvider {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
      this.class(),
    ),
  );

  styles = signal(
    `--sidebar-width: ${SIDEBAR_WIDTH}; --sidebar-width-icon: ${SIDEBAR_WIDTH_ICON};`,
  );
}
