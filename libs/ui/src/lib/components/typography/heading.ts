import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { VariantProps, cva } from 'class-variance-authority';

const scHeadingVariants = cva('', {
  variants: {
    level: {
      '1': 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      '2': 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      '3': 'scroll-m-20 text-2xl font-semibold tracking-tight',
      '4': 'scroll-m-20 text-xl font-semibold tracking-tight',
      '5': '',
      '6': '',
    },
  },
  defaultVariants: {
    level: '1',
  },
});

type ScHeadingVariants = VariantProps<typeof scHeadingVariants>;

@Component({
  selector:
    'h1[sc-heading], h2[sc-heading], h3[sc-heading], h4[sc-heading], h5[sc-heading], h6[sc-heading]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScHeading {
  readonly level = input<ScHeadingVariants['level']>('1');

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(scHeadingVariants({ level: this.level() }), this.classInput()),
  );
}
