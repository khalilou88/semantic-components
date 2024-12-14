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
    <div class="w-full flex gap-2">
      <input
        class="peer relative appearance-none shrink-0 w-4 h-4 border-2 border-blue-200 rounded-sm mt-1 bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-blue-500 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400"
        type="checkbox"
      />
      <svg-check-icon
        class="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
      />
    </div>
  `,
  host: {
    '[class]': 'classes()',
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckbox {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'flex peer appearance-none shrink-0 w-4 h-4 border-2 border-blue-200 rounded-sm bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-blue-500 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400',
      this.class(),
    ),
  );

  checked = signal<boolean>(false);

  toggle() {
    this.checked.update((v) => !v);
  }
}
