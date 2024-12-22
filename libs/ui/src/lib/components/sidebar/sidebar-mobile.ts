import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import { SvgXIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';
import { SIDEBAR_WIDTH_MOBILE } from './constants';
import { ScSidebarState } from './sidebar-state';
import { ScSidebarToggler } from './sidebar-toggler';

@Component({
  selector: 'sc-sidebar-mobile',
  imports: [ScSidebarToggler, SvgXIcon],
  template: `
    <div class="flex size-full flex-col">
      <sc-sidebar-toggler class="absolute right-1 top-1">
        <svg-x-icon />
      </sc-sidebar-toggler>

      <br />
      <br />
      open : {{ sidebarState.open() }}
      <br />
      openMobile : {{ sidebarState.openMobile() }}
      <br />
      isMobile : {{ sidebarState.isMobile() }}

      <ng-content />
    </div>
  `,
  host: {
    '[class]': 'classes()',
    '[style]': 'styles()',
    '[attr.data-sidebar]': '"sidebar"',
    '[attr.data-mobile]': '"true"',
    '[attr.data-state]': 'state()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarMobile {
  sidebarState = inject(ScSidebarState);

  styles = signal(`--sidebar-width: ${SIDEBAR_WIDTH_MOBILE};`);

  side = input.required<'left' | 'right'>();
  openMobile = computed(() => this.sidebarState.openMobile());

  state = computed<'open' | 'closed'>(() => {
    return this.openMobile() ? 'open' : 'closed';
  });

  class = input<string>('');

  classes = computed(() =>
    cn(
      'absolute top-0 h-full bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
      this.openMobile() && 'w-[--sidebar-width]',
      !this.openMobile() && 'w-0 overflow-hidden',
      this.side() === 'left' &&
        'left-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
      this.side() === 'right' &&
        'right-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
      this.class(),
    ),
  );
}
