import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'sc-aspect-ratio',
  imports: [],
  template: `
    <div style="position: absolute; inset: 0px;">
      <ng-content />
    </div>
  `,
  host: {
    '[class]': 'classes()',
    '[style]': '"position: relative; width: 100%; padding-bottom: 56.25%;"',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAspectRatio {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));
}
