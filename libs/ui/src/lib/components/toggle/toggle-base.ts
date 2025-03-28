import { Directive, computed, input, signal } from '@angular/core';

import { cn } from '@semantic-components/utils';
import { VariantProps, cva } from 'class-variance-authority';

export const toggleVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 min-w-10 px-3',
        sm: 'h-9 min-w-9 px-2.5',
        lg: 'h-11 min-w-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ToggleVariants = VariantProps<typeof toggleVariants>;

@Directive({
  host: {
    '[class]': 'class()',
    '(click)': 'toggle()',
  },
})
export class ScToggleBase {
  readonly variant = input<ToggleVariants['variant']>('default');

  readonly size = input<ToggleVariants['size']>('default');

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      toggleVariants({ variant: this.variant(), size: this.size() }),
      this.active() && 'bg-accent text-accent-foreground',
      this.classInput(),
    ),
  );

  readonly active = signal(false);

  protected toggle() {
    this.active.update((active) => !active);
  }
}
