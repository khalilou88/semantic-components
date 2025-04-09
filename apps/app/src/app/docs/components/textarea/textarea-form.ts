import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  inject,
  viewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {
  ScButton,
  ScLabel,
  ScTextarea,
  ScToast,
  ScToastContent,
  ScToastDescription,
  ScToastTitle,
  Toaster,
} from '@semantic-components/ui';

@Component({
  selector: 'app-textarea-form',
  imports: [
    ReactiveFormsModule,
    ScButton,
    ScTextarea,
    ScLabel,
    ScToastDescription,
    ScToastTitle,
    ScToast,
    ScToastContent,
  ],
  template: `
    <form class=" space-y-6" [formGroup]="bioForm" (ngSubmit)="onSubmit()">
      <div class="">
        <label sc-label for="bio">Bio</label>
        <textarea
          class="resize-none"
          id="bio"
          sc-textarea
          formControlName="bio"
          placeholder="Tell us a little bit about yourself"
          rows="4"
        ></textarea>

        <!-- Error Messages -->
        @if (
          bioForm.get('bio')?.invalid && (bioForm.get('bio')?.dirty || bioForm.get('bio')?.touched)
        ) {
          <div class="text-red-500 text-sm mt-1">
            @if (bioForm.get('bio')?.errors?.['required']) {
              <div>Bio is required.</div>
            }
            @if (bioForm.get('bio')?.errors?.['minlength']) {
              <div>Bio must be at least 10 characters.</div>
            }
            @if (bioForm.get('bio')?.errors?.['maxlength']) {
              <div>Bio must not be longer than 160 characters.</div>
            }
          </div>
        }

        <p class="text-sm text-gray-500 mt-1">
          You can
          <span class="font-semibold">&#64;mention</span>
          other users and organizations.
        </p>
      </div>

      <button [disabled]="bioForm.invalid" sc-button type="submit">Submit</button>
    </form>

    <ng-template #toastTemplate>
      <div sc-toast>
        <div sc-toast-content>
          <h2 sc-toast-title>You submitted the following values:</h2>

          <div sc-toast-description>
            <pre
              class="mt-2 w-[340px] rounded-md bg-slate-950 p-4"
            ><code class="text-white">{{ submissionResult }}</code></pre>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  host: {
    class: 'block w-2/3',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaForm {
  private readonly fb = inject(FormBuilder);

  private readonly toaster = inject(Toaster);

  private readonly toastTemplate = viewChild.required<TemplateRef<unknown>>('toastTemplate');

  bioForm: FormGroup;
  submissionResult: string | null = null;

  constructor() {
    this.bioForm = this.fb.group({
      bio: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(160)]],
    });
  }

  onSubmit() {
    if (this.bioForm.valid) {
      // Simulate submission result
      this.submissionResult = JSON.stringify(this.bioForm.value, null, 2);

      this.showToast();
    }
  }

  private showToast() {
    this.toaster.show(this.toastTemplate());
  }
}
