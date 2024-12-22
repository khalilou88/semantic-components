import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';
import { ScAutocompleteInput } from './autocomplete-input';

@Component({
  selector: 'sc-autocomplete',
  imports: [ScAutocompleteInput],
  template: `
    <sc-autocomplete-input />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAutocomplete {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      this.class(),
    ),
  );
}
