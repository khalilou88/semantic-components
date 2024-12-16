import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'sc-switch',
  imports: [],
  template: `
    <input
      class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
      id="switch-component"
      checked
      type="checkbox"
    />
    <label
      class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
      for="switch-component"
    ></label>
  `,
  host: {
    '[class]': 'hostClasses()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSwitch {
  hostClass = input<string>('');

  hostClasses = computed(() => cn('relative inline-block w-11 h-5', this.hostClass()));

  class = input<string>('');

  classes = computed(() => cn('', this.class()));
}
