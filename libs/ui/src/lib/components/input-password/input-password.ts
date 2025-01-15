import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  ViewEncapsulation,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { SiCheckIcon, SiEyeIcon, SiEyeOffIcon, SiXIcon } from '@semantic-icons/lucide-icons';

import { ScInput } from '../input/input';
import { ScLabel } from '../label';

@Component({
  selector: 'sc-input-password',
  imports: [SiCheckIcon, SiXIcon, SiEyeOffIcon, SiEyeIcon, ScLabel, ScInput, ReactiveFormsModule],
  template: `
    <div>
      <!--Password input field with toggle visibility button-->
      <div class="space-y-2">
        <label [for]="id" sc-label>Input with password strength indicator</label>
        <div class="relative">
          <input
            class="pe-9"
            [id]="id"
            [value]="password()"
            [type]="isVisible() ? 'text' : 'password'"
            [attr.aria-invalid]="strengthScore() < 4"
            [formControl]="control"
            sc-input
            placeholder="Password"
            aria-describedby="input-51-description"
          />
          <button
            class="text-muted-foreground/80 hover:text-foreground absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center outline-none transition"
            [attr.aria-label]="isVisible() ? 'Hide password' : 'Show password'"
            [attr.aria-pressed]="isVisible()"
            (click)="toggleVisibility()"
            type="button"
          >
            @if (isVisible()) {
              <svg si-eye-off-icon size="16" strokeWidth="2" aria-hidden="true"></svg>
            } @else {
              <svg si-eye-icon size="16" strokeWidth="2" aria-hidden="true"></svg>
            }
          </button>
        </div>
      </div>

      <!--Password strength indicator-->
      <div
        class="bg-border mb-4 mt-3 h-1 w-full overflow-hidden rounded-full"
        [attr.aria-valuenow]="strengthScore()"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="4"
        aria-label="Password strength"
      >
        <div
          class="h-full transition-all duration-500 ease-out"
          [class]="strengthColor()"
          [style.width.%]="(strengthScore() / 4) * 100"
        ></div>
      </div>

      <!-- Password strength description -->
      <p class="mb-2 text-sm font-medium" id="password-description">
        {{ strengthText() }}. Must contain:
      </p>

      <!-- Password requirements list -->
      <ul class="space-y-1.5" aria-label="Password requirements">
        @for (req of strength(); track $index) {
          <li class="flex items-center gap-2">
            @if (req.met) {
              <svg class="text-emerald-500" si-check-icon size="16" aria-hidden="true"></svg>
            } @else {
              <svg class="text-emerald-500" si-x-icon size="16" aria-hidden="true"></svg>
            }
            <span
              class="text-xs"
              [class]="req.met ? 'text-emerald-500' : 'text-muted-foreground/80'"
            >
              {{ req.text }}
            </span>
            <span class="sr-only">
              {{ req.met ? '- Requirement met' : '- Requirement not met' }}
            </span>
          </li>
        }
      </ul>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputPassword implements OnInit {
  protected readonly id = inject(_IdGenerator).getId('sc-input-password-');

  protected control = new FormControl();

  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.password.set(value));
  }

  readonly password = signal<string>('');
  readonly isVisible = signal<boolean>(false);

  requirements = [
    { regex: /.{8,}/, text: 'At least 8 characters' },
    { regex: /[0-9]/, text: 'At least 1 number' },
    { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
    { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
  ];

  strength = computed(() =>
    this.requirements.map((req) => ({
      met: req.regex.test(this.password()),
      text: req.text,
    })),
  );

  strengthScore = computed(() => this.strength().filter((req) => req.met).length);

  strengthColor = computed(() => {
    const score = this.strengthScore();
    if (score === 0) return 'bg-border';
    if (score <= 1) return 'bg-red-500';
    if (score <= 2) return 'bg-orange-500';
    if (score === 3) return 'bg-amber-500';
    return 'bg-emerald-500';
  });

  strengthText = computed(() => {
    const score = this.strengthScore();
    if (score === 0) return 'Enter a password';
    if (score <= 2) return 'Weak password';
    if (score === 3) return 'Medium password';
    return 'Strong password';
  });

  toggleVisibility() {
    this.isVisible.update((prev) => !prev);
  }
}
