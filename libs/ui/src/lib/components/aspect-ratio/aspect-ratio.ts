import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'div[sc-aspect-ratio]',
  imports: [],
  template: `
    <div class="absolute inset-0">
      <ng-content />
    </div>
  `,
  host: {
    '[class]': 'class()',
    '[style.paddingBottom]': 'calculatePadding()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAspectRatio {
  readonly ratio = input<number>(1);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('relative w-full', this.classInput()));

  calculatePadding(): string {
    return `${(1 / this.ratio()) * 100}%`;
  }
}
