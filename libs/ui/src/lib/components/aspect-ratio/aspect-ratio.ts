import { NgOptimizedImage } from '@angular/common';
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
  imports: [NgOptimizedImage],
  template: `
    <div [class]="wrapperClass()" [style]="wrapperStyle()">
      <img [class]="imageClasses()" [ngSrc]="src()" [alt]="alt()" [style]="imageStyle()" fill />
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

  imageStyle = signal(
    'position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;',
  );

  hostClass = input<string>('');

  hostClasses = computed(() => cn('h-full w-full rounded-md object-cover', this.hostClass()));

  hostStyle = computed(() => {
    const parts = this.ratio()
      .split('/')
      .map((s) => +s);

    const paddingBottom = (parts[1] / parts[0]) * 100;

    return `position: relative; width: 100%; padding-bottom: ${paddingBottom}%;`;
  });

  wrapperClass = input<string>('');

  wrapperStyle = signal('position: absolute; inset: 0px;');

  ratio = input<string>('1 / 1');
  src = input.required<string>();
  alt = input<string>('');
}
