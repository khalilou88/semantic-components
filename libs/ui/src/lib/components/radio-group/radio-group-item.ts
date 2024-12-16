import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { SvgCircleIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';

@Component({
  selector: 'sc-radio-group-item',
  imports: [SvgCircleIcon],
  template: `
    <input id="flexRadioDefault1" [class]="classes()" type="radio" name="flexRadioDefault" />
    <svg-circle-icon [hostClass]="circleHostClass()" [class]="circleClasses()" />
  `,
  host: {
    '[class]': 'hostClasses()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioGroupItem {
  class = input<string>('row-start-1 col-start-1');

  classes = computed(() =>
    cn(
      'appearance-none aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.class(),
    ),
  );

  hostClass = input<string>('grid grid-cols-[1fr]');

  hostClasses = computed(() => cn('', this.hostClass()));

  circleHostClass = input<string>(
    'row-start-1 col-start-1  h-4 w-4 flex items-center justify-center',
  );

  circleClass = input<string>('');

  circleClasses = computed(() => cn('h-2.5 w-2.5 fill-primary text-primary', this.circleClass()));
}
