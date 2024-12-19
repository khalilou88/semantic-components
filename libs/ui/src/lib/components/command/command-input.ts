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
    <svg-search-icon class="mr-2 size-4 shrink-0 opacity-50" />
    <input
      class="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      [placeholder]="placeholder()"
    />
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

  classes = computed(() => cn('flex items-center border-b px-3 [&_.svg]:size-5', this.class()));

  placeholder = input('');
}
