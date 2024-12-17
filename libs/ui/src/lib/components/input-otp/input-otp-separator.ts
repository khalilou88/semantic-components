import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { SvgDotIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';

@Component({
  selector: 'sc-input-otp-separator',
  imports: [SvgDotIcon],
  template: `
    <svg-dot-icon />
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
