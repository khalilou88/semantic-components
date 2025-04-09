import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ScMultiSelect, ScOptionModel } from '@semantic-components/ui';

@Component({
  selector: 'app-multi-select-page',
  imports: [ScMultiSelect, ReactiveFormsModule, CommonModule],
  template: `
    <div class="m-10">
      <div class="p-6 max-w-md mx-auto">
        <h1 class="text-xl font-bold mb-4">Angular Multi-Select with Tailwind</h1>

        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="mb-4">
            <sc-multi-select
              [options]="options"
              [placeholder]="'Select fruits'"
              [searchable]="true"
              [label]="'Favorite Fruits'"
              [required]="true"
              [showError]="submitted && !hasSelectedFruits"
              [errorMessage]="'Please select at least one fruit'"
              (selectionChange)="onSelectionChange($event)"
            ></sc-multi-select>
          </div>

          <button
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
            aria-label="Submit form"
          >
            Submit
          </button>
        </form>

        <div class="mt-4" aria-live="polite">
          <h2 class="font-semibold">Selected items:</h2>
          <p class="text-gray-500" *ngIf="selectedItems.length === 0">No items selected</p>
          <ul class="list-disc pl-5" *ngIf="selectedItems.length > 0">
            <li *ngFor="let item of selectedItems">{{ item.label }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MultiSelectPage {
  private readonly fb = inject(FormBuilder);

  options: ScOptionModel[] = [
    { id: 1, label: 'Apple' },
    { id: 2, label: 'Banana' },
    { id: 3, label: 'Cherry' },
    { id: 4, label: 'Durian' },
    { id: 5, label: 'Elderberry' },
    { id: 6, label: 'Fig' },
    { id: 7, label: 'Grape' },
    { id: 8, label: 'Honeydew' },
  ];

  selectedItems: ScOptionModel[] = [];
  form: FormGroup;
  submitted = false;

  constructor() {
    this.form = this.fb.group({
      fruitsSelected: [false, Validators.requiredTrue],
    });
  }

  get hasSelectedFruits(): boolean {
    return this.selectedItems.length > 0;
  }

  onSelectionChange(selected: ScOptionModel[]) {
    this.selectedItems = selected;
    this.form.patchValue({
      fruitsSelected: selected.length > 0,
    });
    console.log('Selected items:', selected);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Form submitted successfully');
    }
  }
}
