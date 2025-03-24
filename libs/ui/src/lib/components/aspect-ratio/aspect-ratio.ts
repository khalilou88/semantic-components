import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-aspect-ratio',
  imports: [],
  template: `
    <div class="absolute inset-0">
      <ng-content />
    </div>
  `,
  host: {
    '[class]': 'class()',
    '[style.paddingBottom]': 'padding()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAspectRatio {
  readonly ratio = input<number>(1);

  protected padding = computed(() => {
    return `${(1 / this.ratio()) * 100}%`;
  });

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('block relative w-full overflow-hidden', this.classInput()),
  );
}
