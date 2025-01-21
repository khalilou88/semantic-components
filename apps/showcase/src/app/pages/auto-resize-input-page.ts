import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScAutoResizeInput } from '@semantic-components/ui';

@Component({
  selector: 'app-auto-resize-input-page',
  imports: [ScAutoResizeInput, ReactiveFormsModule, FormsModule, JsonPipe],
  template: `
    <div class="mx-auto max-w-2xl p-6">
      <h2 class="mb-4 text-xl font-medium">Auto-resizing Input Examples</h2>

      <!-- Template-driven example -->
      <div class="mb-6">
        <h3 class="mb-2 text-lg font-medium">Template-driven Form</h3>
        <div class="flex items-center gap-2">
          <label for="id1">Name:</label>
          <sc-auto-resize-input
            id="id1"
            [(ngModel)]="name"
            [minWidth]="100"
            placeholder="Enter your name"
          ></sc-auto-resize-input>
        </div>
        <p class="mt-2 text-gray-600">Current value: {{ name }}</p>
      </div>

      <!-- Reactive form example -->
      <div class="mb-6">
        <h3 class="mb-2 text-lg font-medium">Reactive Form</h3>
        <form class="space-y-4" [formGroup]="form">
          <div class="flex items-center gap-2">
            <label for="id2">Email:</label>
            <sc-auto-resize-input
              id="id2"
              [minWidth]="200"
              formControlName="email"
              placeholder="Enter your email"
            ></sc-auto-resize-input>
          </div>
          <div class="flex items-center gap-2">
            <label for="id3">Phone:</label>
            <sc-auto-resize-input
              id="id3"
              [minWidth]="150"
              type="tel"
              formControlName="phone"
              placeholder="Enter your phone"
            ></sc-auto-resize-input>
          </div>
        </form>
        <p class="mt-2 text-gray-600">Form value: {{ form.value | json }}</p>
      </div>

      <!-- Custom styled example -->
      <div>
        <h3 class="mb-2 text-lg font-medium">Custom Styled</h3>
        <sc-auto-resize-input
          [(ngModel)]="customValue"
          [minWidth]="120"
          placeholder="Custom styled input"
          inputClass="px-4 py-2 bg-blue-50 border-2 border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></sc-auto-resize-input>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AutoResizeInputPage {
  name = '';
  customValue = '';

  form = new FormGroup({
    email: new FormControl(''),
    phone: new FormControl(''),
  });
}
