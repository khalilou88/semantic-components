import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="container mx-auto p-6">
      <form class="w-2/3 space-y-6" [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700" for="username">Username</label>
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            id="username"
            type="text"
            formControlName="username"
            placeholder="shadcn"
          />
          <p class="text-sm text-gray-500">This is your public display name.</p>
          @if (
            form.get('username')?.invalid &&
            (form.get('username')?.dirty || form.get('username')?.touched)
          ) {
            <div class="text-sm text-red-600">
              @if (form.get('username')?.errors?.['required']) {
                <div>Username is required.</div>
              }
              @if (form.get('username')?.errors?.['minlength']) {
                <div>Username must be at least 2 characters.</div>
              }
            </div>
          }
        </div>
        <button
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="form.invalid"
          type="submit"
        >
          Submit
        </button>
      </form>

      <!-- Toast notification -->
      @if (showToast) {
        <div class="fixed bottom-4 right-4 w-80 z-50">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div class="px-4 py-3 bg-gray-50 border-b flex justify-between items-center">
              <p class="font-medium text-gray-700">You submitted the following values:</p>
              <button
                class="text-gray-400 hover:text-gray-500 focus:outline-none"
                (click)="hideToast()"
                type="button"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div class="px-4 py-3">
              <pre class="mt-2 w-full rounded-md bg-gray-900 p-4 overflow-x-auto">
                <code class="text-white">{{ submittedData | json }}</code>
              </pre>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputForm {
  private readonly fb = inject(FormBuilder);

  form: FormGroup;
  showToast = false;
  submittedData: any = null;

  constructor() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submittedData = this.form.value;
      this.showToast = true;

      // Auto hide toast after 5 seconds
      setTimeout(() => {
        this.hideToast();
      }, 5000);
    }
  }

  hideToast() {
    this.showToast = false;
  }
}
