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
        {{ item.name }}
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

  itemsArray = signal<ScAutocompleteModel[]>([
    {
      id: '5b902934d965e7501f4e1c6f',
      name: 'Caroline Hodges',
    },
    {
      id: '5b9029348f7eed8b6f5f02db',
      name: 'Delores Rivas',
    },
    {
      id: '5b9029346f48c8407c64d0d5',
      name: 'Darlene Franklin',
    },
    {
      id: '5b9029341eff315fa87f9e21',
      name: 'Alfreda Love',
    },
    {
      id: '5b9029342e8917c6ccdb9865',
      name: 'Marcy Ratliff',
    },
    {
      id: '5b9029349dbb48013460e01f',
      name: 'Beulah Nielsen',
    },
    {
      id: '5b902934f4f1586e5e72d74a',
      name: 'Morton Kerr',
    },
    {
      id: '5b9029347918bb204bf7014e',
      name: 'Autumn Tillman',
    },
    {
      id: '5b902934b86f80e1fc60c626',
      name: 'Diane Bennett',
    },
    {
      id: '5b9029348999f59215020349',
      name: 'June Eaton',
    },
  ]);

  model = signal('');

  @ViewChildren(ScAutocompleteItem) items!: QueryList<ScAutocompleteItem>;

  private keyManager!: ActiveDescendantKeyManager<ScAutocompleteItem>;

  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap().withTypeAhead();
  }

  onKeydown(event: KeyboardEvent) {
    if (event.keyCode === ENTER) {
      this.model.set(this.keyManager.activeItem ? this.keyManager.activeItem.item().name : '');
    } else {
      this.keyManager.onKeydown(event);
    }
  }
}
