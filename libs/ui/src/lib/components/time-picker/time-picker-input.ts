import { Directive, computed, input } from '@angular/core';

import { cn } from '../../utils';
import { scInputStyles } from '../input';

@Directive({
  selector: '[scTimePickerInput]',
  host: {
    '[class]': 'classes()',
  },
})
export class ScTimePickerInput {
  class = input<string>('');
  classes = computed(() => cn(scInputStyles(), this.class()));
}
