import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
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
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from './constants';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'sc-sidebar-provider',
  imports: [LayoutModule],
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
  providers: [ScSidebarState],
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

  sidebarState = inject(ScSidebarState);

  constructor(private observer: BreakpointObserver) {
    this.observer.observe('(max-width: 640px)').subscribe((result) => {
      this.sidebarState.isMobile.set(result.matches);
    });
  }
}
