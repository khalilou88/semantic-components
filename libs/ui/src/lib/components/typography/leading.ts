import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '../../utils';

const scLeadingVariants = cva('', {
  variants: {
    level: {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
    },
  },
  defaultVariants: {
    level: 'h1',
  },
});

type ScLeadingVariants = VariantProps<typeof scLeadingVariants>;

@Component({
  selector: 'sc-leading',
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
export class ScLeading {
  level = input<ScLeadingVariants['level']>('h1');

  class = input<string>('');

  classes = computed(() => cn(scLeadingVariants({ level: this.level() }), this.class()));
}
