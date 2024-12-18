import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '../../utils';
import { ScSheetToggler } from './sheet-toggler';
import { ScSheetTrigger } from './sheet-trigger';
import { SidebarContent } from './sidebar-content';

const sheetVariants = cva(
  'relative z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        top: 'size-full border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'size-full border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'size-full border-r  data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'size-full border-l  data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);

export type SheetVariants = VariantProps<typeof sheetVariants>;

@Component({
  selector: 'sc-sheet',
  imports: [ScSheetToggler, SidebarContent],
  template: `
    <sc-sheet-toggler class="absolute right-1 top-1" />

    <app-sidebar-content />
  `,
  host: {
    '[class]': 'classes()',
    '[attr.data-state]': 'state()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSheet {
  sidebarState = inject(ScSheetTrigger);

  state = computed<'open' | 'closed'>(() => {
    return this.sidebarState.open() ? 'open' : 'closed';
  });

  side = signal<SheetVariants['side']>('right');

  class = input<string>('');

  classes = computed(() => cn(sheetVariants({ side: this.side() }), this.class()));
}
