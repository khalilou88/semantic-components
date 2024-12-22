import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import { JsonPipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
  viewChildren,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { debounceTime } from 'rxjs';

import { cn } from '../../utils';
import { ScInput } from '../input';
import { ScAutocompleteItem } from './autocomplete-item';
import { ScAutocompleteModel } from './autocomplete-model';

@Component({
  selector: 'sc-autocomplete',
  imports: [ScInput, ScAutocompleteItem, ReactiveFormsModule, JsonPipe],
  template: `
    <!--sc-autocomplete-input /-->

    <input
      [formControl]="searchControl"
      (keyup)="onKeydown($event)"
      sc-input
      placeholder="Search..."
    />

    @for (item of filteredItems(); track $index) {
      <sc-autocomplete-item [item]="item" [selectedItem]="selectedItem()">
        {{ item.label }}
      </sc-autocomplete-item>
    }

    <br />
    <br />
    <br />
    <br />

    selectedItem : {{ selectedItem() | json }}
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
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      this.class(),
    ),
  );

  items = signal<ScAutocompleteModel[]>([
    {
      id: '5b902934d965e7501f4e1c6f',
      label: 'Caroline Hodges',
    },
    {
      id: '5b9029348f7eed8b6f5f02db',
      label: 'Delores Rivas',
    },
    {
      id: '5b9029346f48c8407c64d0d5',
      label: 'Darlene Franklin',
    },
    {
      id: '5b9029341eff315fa87f9e21',
      label: 'Alfreda Love',
    },
    {
      id: '5b9029342e8917c6ccdb9865',
      label: 'Marcy Ratliff',
    },
    {
      id: '5b9029349dbb48013460e01f',
      label: 'Beulah Nielsen',
    },
    {
      id: '5b902934f4f1586e5e72d74a',
      label: 'Morton Kerr',
    },
    {
      id: '5b9029347918bb204bf7014e',
      label: 'Autumn Tillman',
    },
    {
      id: '5b902934b86f80e1fc60c626',
      label: 'Diane Bennett',
    },
    {
      id: '5b9029348999f59215020349',
      label: 'June Eaton',
    },
  ]);

  searchControl = new FormControl();

  input = toSignal(this.searchControl.valueChanges.pipe(debounceTime(300)));

  filteredItems = computed(() => {
    if (!this.input()) {
      return this.items();
    }
    return this.items().filter(
      (item) => item.label.toLowerCase().indexOf(this.input().toLowerCase()) !== -1,
    );
  });

  selectedItem = signal<ScAutocompleteModel | undefined>(undefined);

  readonly viewItems = viewChildren(ScAutocompleteItem);

  private keyManager!: ActiveDescendantKeyManager<ScAutocompleteItem>;

  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.viewItems()).withWrap().withTypeAhead();
  }

  onKeydown(event: KeyboardEvent) {
    if (event.keyCode === ENTER) {
      this.selectedItem.set(
        this.keyManager.activeItem ? this.keyManager.activeItem.item() : undefined,
      );
    } else {
      this.keyManager.onKeydown(event);
    }
  }
}
