import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiDotIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-input-otp-separator',
  imports: [SiDotIcon],
  template: `
    <svg si-dot-icon></svg>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputOTPSeparator {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));
}
