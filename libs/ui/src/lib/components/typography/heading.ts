import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '../../utils';

const scHeadingVariants = cva('', {
  variants: {
    level: {
      1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
      2: 'text-3xl font-semibold tracking-tight',
      3: 'text-2xl font-semibold tracking-tight',
      4: 'text-xl font-semibold tracking-tight',
      5: '',
      6: '',
    },
  },
  defaultVariants: {
    level: 1,
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
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScHeading {
  level = input<ScHeadingVariants['level']>(1);

  class = input<string>('');

  classes = computed(() => cn(scHeadingVariants({ level: this.level() }), this.class()));
}
