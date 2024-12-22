import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';
import { scOverlayClasses } from '../overlay';
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from './constants';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'sc-sidebar-provider',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '[style]': 'styles()',
    '[attr.data-state]': 'stateMobile()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ScSidebarProvider {
  sidebarState = inject(ScSidebarState);

  class = input<string>('');

  classes = computed(() =>
    cn(
      'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
      this.sidebarState.openMobile() && scOverlayClasses(),
      this.class(),
    ),
  );

  styles = signal(
    `--sidebar-width: ${SIDEBAR_WIDTH}; --sidebar-width-icon: ${SIDEBAR_WIDTH_ICON};`,
  );

  stateMobile = computed<'open' | 'closed'>(() => {
    return this.sidebarState.openMobile() ? 'open' : 'closed';
  });
}
