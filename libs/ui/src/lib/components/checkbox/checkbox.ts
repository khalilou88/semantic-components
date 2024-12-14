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
  selector: 'sc-checkbox',
  imports: [SvgCheckIcon],
  template: `
    <input
      class="peer relative appearance-none h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      type="checkbox"
    />

    @if (checked() === true) {
      <svg-check-icon class="absolute w-4 h-4 pointer-events-none stroke-white outline-none" />
    }
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
  class = input<string>('');

  classes = computed(() => cn('w-full flex gap-2', this.class()));

  state = computed(() => {
    return this.checked() ? 'checked' : '';
  });

  checked = signal<boolean>(false);

  toggle() {
    this.checked.update((v) => !v);
  }
}
