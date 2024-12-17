import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'sc-aspect-ratio',
  imports: [],
  template: `
    <div [class]="wrapperClass()" [style]="wrapperStyle()">
      <img [class]="imageClasses()" [src]="src()" [alt]="alt()" fill />
    </div>
  `,
  host: {
    '[class]': 'hostClasses()',
    '[style]': 'hostStyle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAspectRatio {
  imageClass = input<string>('');

  imageClasses = computed(() => cn('h-full w-full rounded-md object-cover', this.imageClass()));

  hostClass = input<string>('');

  hostClasses = computed(() => cn('h-full w-full rounded-md object-cover', this.hostClass()));

  hostStyle = computed(() => {
    return `position: relative; width: 100%; padding-bottom: 56.25%;`;
  });

  wrapperClass = input<string>('');

  wrapperStyle = signal('position: absolute; inset: 0px;');

  ratio = input<string>('1 / 1');
  src = input.required<string>();
  alt = input<string>('');
}
