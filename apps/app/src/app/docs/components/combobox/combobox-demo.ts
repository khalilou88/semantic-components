import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ScComboBoxOption, ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-combobox-demo',
  imports: [ScCombobox, FormsModule],
  template: `
    <sc-combobox
      [(ngModel)]="selectedValue"
      [options]="comboOptions"
      [searchable]="true"
      [allowCustomValues]="true"
      [clearable]="true"
      (selectionChange)="onSelectionChange($event)"
      (customValueCreated)="onCustomValueCreated($event)"
      (searchChange)="onSearchChange($event)"
      placeholder="Choose a fruit..."
    ></sc-combobox>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxDemo {
  selectedValue: any = null;

  comboOptions: ScComboBoxOption[] = [
    {
      value: 'apple',
      label: 'Apple',
      description: 'A crisp red fruit',
    },
    {
      value: 'banana',
      label: 'Banana',
      description: 'A yellow tropical fruit',
    },
    {
      value: 'cherry',
      label: 'Cherry',
      description: 'Small red stone fruit',
    },
    {
      value: 'date',
      label: 'Date',
      description: 'Sweet brown fruit from palm trees',
    },
    {
      value: 'elderberry',
      label: 'Elderberry',
      disabled: true,
      description: 'Dark purple berries (currently unavailable)',
    },
  ];

  onSelectionChange(option: ScComboBoxOption | null) {
    console.log('Selected:', option);
  }

  onCustomValueCreated(value: string) {
    console.log('Custom value created:', value);
    // Optionally add to options array
    this.comboOptions.push({
      value: value,
      label: value,
      description: 'Custom option',
    });
  }

  onSearchChange(searchTerm: string) {
    console.log('Search:', searchTerm);
  }
}
