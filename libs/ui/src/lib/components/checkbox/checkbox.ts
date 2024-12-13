import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';

@Component({
  selector: 'input[sc-checkbox]',
  imports: [SvgCheckIcon],
  template: `
    <ng-content />

    <svg-check-icon
      class="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
    />
  `,
  host: {
    '[class]': 'classes()',
    '[attr.data-state]': 'state()',
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckbox {
  state = signal('checked');

  class = input<string>('');

  classes = computed(() =>
    cn(
      'appearance-none relative peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      this.class(),
    ),
  );

  toggle() {
    console.log('toggle');

    if (this.state() === 'checked') {
      this.state.set('');
    } else {
      this.state.set('checked');
    }
  }
}
