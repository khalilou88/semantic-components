import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ScStep, ScStepper } from '@semantic-components/ui';

@Component({
  selector: 'app-stepper-page',
  imports: [ReactiveFormsModule, ScStepper, ScStep],
  template: `
    <div class="container mx-auto p-6 max-w-4xl">
      <h1 class="text-2xl font-bold mb-6">Multi-step Form</h1>

      <sc-stepper>
        <sc-step label="Personal Information">
          <h2 class="text-xl font-semibold mb-4">Personal Information</h2>
          <form class="space-y-4" [formGroup]="personalForm">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                formControlName="name"
              />
              @if (personalForm.get('name')?.invalid && personalForm.get('name')?.touched) {
                <p class="mt-1 text-sm text-red-600">Name is required</p>
              }
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                formControlName="email"
              />
              @if (personalForm.get('email')?.invalid && personalForm.get('email')?.touched) {
                <p class="mt-1 text-sm text-red-600">Valid email is required</p>
              }
            </div>
          </form>
        </sc-step>

        <sc-step label="Address">
          <h2 class="text-xl font-semibold mb-4">Address Details</h2>
          <form class="space-y-4" [formGroup]="addressForm">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Street</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                formControlName="street"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                formControlName="city"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                formControlName="zipCode"
              />
            </div>
          </form>
        </sc-step>

        <sc-step label="Review">
          <h2 class="text-xl font-semibold mb-4">Review Your Information</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium mb-2">Personal Information</h3>
              <div class="bg-gray-50 p-4 rounded-md">
                <p>
                  <span class="font-medium">Name:</span>
                  {{ personalForm.get('name')?.value }}
                </p>
                <p>
                  <span class="font-medium">Email:</span>
                  {{ personalForm.get('email')?.value }}
                </p>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-medium mb-2">Address Information</h3>
              <div class="bg-gray-50 p-4 rounded-md">
                <p>
                  <span class="font-medium">Street:</span>
                  {{ addressForm.get('street')?.value }}
                </p>
                <p>
                  <span class="font-medium">City:</span>
                  {{ addressForm.get('city')?.value }}
                </p>
                <p>
                  <span class="font-medium">Zip Code:</span>
                  {{ addressForm.get('zipCode')?.value }}
                </p>
              </div>
            </div>
          </div>
        </sc-step>
      </sc-stepper>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StepperPage {
  personalForm: FormGroup;
  addressForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.personalForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.addressForm = this.fb.group({
      street: [''],
      city: [''],
      zipCode: [''],
    });
  }

  onStepperComplete() {
    // Handle form submission
    const formData = {
      ...this.personalForm.value,
      ...this.addressForm.value,
    };

    console.log('Form submitted:', formData);
    // Make API call or other processing here
  }
}
