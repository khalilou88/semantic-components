import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { SvgSearchIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';

@Component({
  selector: 'sc-command-input',
  imports: [SvgSearchIcon],
  template: `
    <div class="flex items-center border-b px-3">
      <svg-search-icon class="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input
        [placeholder]="placeholder()"
        className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCommandInput {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  placeholder = input('');
}
