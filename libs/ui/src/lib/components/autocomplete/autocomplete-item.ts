import { Highlightable, ListKeyManagerOption } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';
import { ScAutocompleteModel } from './autocomplete-model';

@Component({
  selector: 'sc-autocomplete-item',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '[attr.data-disabled]': '_disabled()',
    '[attr.data-selected]': '_isActive()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAutocompleteItem implements Highlightable, ListKeyManagerOption {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_.svg]:pointer-events-none [&_.svg]:size-4 [&_.svg]:shrink-0',
      this.class(),
    ),
  );

  readonly _disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  item = input.required<ScAutocompleteModel>();

  private _isActive = signal(false);

  disabled?: boolean | undefined;

  getLabel?(): string {
    return this.item.name;
  }

  setActiveStyles(): void {
    this._isActive.set(true);
  }

  setInactiveStyles(): void {
    this._isActive.set(false);
  }
}
