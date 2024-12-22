import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';
import { ScInput } from '../input';
import { ScAutocompleteItem } from './autocomplete-item';
import { ScAutocompleteModel } from './autocomplete-model';

@Component({
  selector: 'sc-autocomplete',
  imports: [ScInput, ScAutocompleteItem],
  template: `
    <!--sc-autocomplete-input /-->

    <input (keyup)="onKeydown($event)" sc-input placeholder="Search..." />

    @for (item of itemsArray(); track $index) {
      <sc-autocomplete-item [item]="item">
        {{ item.label }}
      </sc-autocomplete-item>
    }

    <br />
    <br />
    <br />
    <br />

    selected : {{ model() }}
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAutocomplete implements AfterViewInit {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md border bg-popover text-popover-foreground',
      this.class(),
    ),
  );

  itemsArray = signal<ScAutocompleteModel[]>([{ label: 'label 1' }]);

  model = signal('');

  @ViewChildren(ScAutocompleteItem) items!: QueryList<ScAutocompleteItem>;

  private keyManager!: ActiveDescendantKeyManager<ScAutocompleteItem>;

  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap();
  }

  onKeydown(event: any) {
    if (event.keyCode === ENTER) {
      this.model.set(this.keyManager.activeItem ? this.keyManager.activeItem.item().label : '');
    } else {
      this.keyManager.onKeydown(event);
    }
  }
}
