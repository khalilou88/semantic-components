import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';

@Component({
  selector: 'sc-menu-checkbox-item',
  imports: [SvgCheckIcon],
  template: `
    <div
      class="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <svg-check-icon class="h-4 w-4" />
      </span>

      <ng-content />
    </div>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMenuCheckboxItem {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));
}
