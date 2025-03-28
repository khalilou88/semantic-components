import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea-form',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto max-w-md p-4">
      <form class="space-y-4" [formGroup]="bioForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label class="block text-sm font-medium mb-2" for="bio">Bio</label>
          <textarea
            class="w-full p-2 border rounded resize-none"
            id="bio"
            formControlName="bio"
            placeholder="Tell us a little bit about yourself"
            rows="4"
          ></textarea>

          <!-- Error Messages -->
          <div
            class="text-red-500 text-sm mt-1"
            *ngIf="
              bioForm.get('bio')?.invalid &&
              (bioForm.get('bio')?.dirty || bioForm.get('bio')?.touched)
            "
          >
            <div *ngIf="bioForm.get('bio')?.errors?.['required']">Bio is required.</div>
            <div *ngIf="bioForm.get('bio')?.errors?.['minlength']">
              Bio must be at least 10 characters.
            </div>
            <div *ngIf="bioForm.get('bio')?.errors?.['maxlength']">
              Bio must not be longer than 160 characters.
            </div>
          </div>

          <p class="text-sm text-gray-500 mt-1">
            You can
            <span class="font-semibold">&#64;mention</span>
            other users and organizations.
          </p>
        </div>

        <button
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
          [disabled]="bioForm.invalid"
          type="submit"
        >
          Submit
        </button>
      </form>

      <!-- Submission Result Modal -->
      <div
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        *ngIf="submissionResult"
      >
        <div class="bg-white p-6 rounded-lg max-w-md w-full">
          <h2 class="text-xl font-bold mb-4">Submission Result</h2>
          <pre class="bg-gray-100 p-4 rounded">{{ submissionResult }}</pre>
          <button class="mt-4 w-full bg-blue-500 text-white p-2 rounded" (click)="closeModal()">
            Close
          </button>
        </div>
      </div>
    </div>
  `,
  host: {
    class: 'block w-full',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaForm {
  bioForm: FormGroup;
  submissionResult: string | null = null;

  constructor(private readonly fb: FormBuilder) {
    this.bioForm = this.fb.group({
      bio: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(160)]],
    });
  }

  onSubmit() {
    if (this.bioForm.valid) {
      // Simulate submission result
      this.submissionResult = JSON.stringify(this.bioForm.value, null, 2);
    }
  }

  closeModal() {
    this.submissionResult = null;
  }
}
