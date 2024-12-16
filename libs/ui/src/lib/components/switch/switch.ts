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
  selector: 'sc-switch',
  imports: [],
  template: `
    <input
      [class]="classes()"
      [id]="id()"
      [checked]="checked()"
      [attr.data-state]="state()"
      type="checkbox"
    />
    <span
      class="absolute top-0 left-0 pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      [attr.data-state]="state()"
    ></span>
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

  hostClasses = computed(() => cn('relative inline-block h-6 w-11', this.hostClass()));

  class = input<string>('');

  classes = computed(() =>
    cn(
      'peer appearance-none inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      this.class(),
    ),
  );

  state = signal('unchecked');

  id = input('');

  checked = signal('false');
}
