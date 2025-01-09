import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-tooltip-container',
  imports: [],
  template: `
    {{ message() }}
  `,
  host: {
    role: 'tooltip',
    '[class]': 'class()',
    '[attr.data-position]': 'position()',
    '[attr.data-state]': 'state()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTooltipContainer {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[position=below]:slide-in-from-top-2 data-[position=left]:slide-in-from-right-2 data-[position=right]:slide-in-from-left-2 data-[position=above]:slide-in-from-bottom-2',
      this.classInput(),
    ),
  );

  readonly message = input.required<string>();

  readonly position = input.required<'left' | 'right' | 'above' | 'below'>();

  readonly state = input.required<'open' | 'closed'>();
}
