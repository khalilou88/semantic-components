import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { VariantProps, cva } from 'class-variance-authority';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>.svg+div]:translate-y-[-3px] [&>.svg]:absolute [&>.svg]:left-4 [&>.svg]:top-4 [&>.svg]:text-foreground [&>.svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>.svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type AlertVariants = VariantProps<typeof alertVariants>;

@Component({
  selector: 'div[sc-alert]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'alert',
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAlert {
  variant = input<AlertVariants['variant']>('default');

  class = input<string>('');

  classes = computed(() => cn(alertVariants({ variant: this.variant() }), this.class()));
}
