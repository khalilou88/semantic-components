import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { VariantProps, cva } from 'class-variance-authority';

import { ScSheetManager } from './sheet-manager';

const sheetVariants = cva(
  'relative z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        top: 'size-full border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'size-full border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'size-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'size-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);

export type SheetVariants = VariantProps<typeof sheetVariants>;

@Component({
  selector: 'div[sc-sheet]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    '[attr.data-state]': 'state()',
    '(animationend)': 'handleAnimationEnd($event)',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSheet {
  private readonly scSheetManager = inject(ScSheetManager);

  readonly state = computed<'open' | 'closed'>(() => {
    return this.scSheetManager.state();
  });

  readonly side = computed<'top' | 'bottom' | 'left' | 'right'>(() => {
    return this.scSheetManager.side();
  });

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(sheetVariants({ side: this.side() }), this.classInput()),
  );

  protected handleAnimationEnd(event: AnimationEvent): void {
    if (event.target === event.currentTarget && event.animationName === 'exit') {
      this.scSheetManager.close();
    }
  }
}
