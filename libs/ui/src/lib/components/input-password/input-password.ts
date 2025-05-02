import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { cn } from '@semantic-components/utils';
import { SiCheckIcon, SiEyeIcon, SiEyeOffIcon, SiXIcon } from '@semantic-icons/lucide-icons';

import { ScInput } from '../input';
import { ScLabel } from '../label';
import { ScProgress } from '../progress';

@Component({
  selector: 'sc-input-password',
  imports: [
    SiCheckIcon,
    SiXIcon,
    SiEyeOffIcon,
    SiEyeIcon,
    ScLabel,
    ScInput,
    ReactiveFormsModule,
    ScProgress,
  ],
  template: `
    <div class="space-y-2">
      <label [for]="id" sc-label>Password</label>
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
          class="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 outline-none transition hover:text-foreground"
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
    <sc-progress
      [class]="progressClass()"
      [value]="strengthScore()"
      max="4"
      aria-label="Password strength"
    />

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
          <span class="text-xs" [class]="req.met ? 'text-emerald-500' : 'text-muted-foreground/80'">
            {{ req.text }}
          </span>
          <span class="sr-only">
            {{ req.met ? '- Requirement met' : '- Requirement not met' }}
          </span>
        </li>
      }
    </ul>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputPassword implements OnInit {
  protected readonly id = inject(_IdGenerator).getId('sc-input-password-');

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block w-full', this.classInput()));

  protected control = new FormControl();

  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.password.set(value));
  }

  readonly password = signal<string>('');
  readonly isVisible = signal<boolean>(false);

  readonly requirements = [
    { regex: /.{8,}/, text: 'At least 8 characters' },
    { regex: /\d/, text: 'At least 1 number' },
    { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
    { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
  ];

  readonly strength = computed(() =>
    this.requirements.map((req) => ({
      met: req.regex.test(this.password()),
      text: req.text,
    })),
  );

  readonly strengthScore = computed(() => this.strength().filter((req) => req.met).length);

  protected readonly progressClass = computed(() =>
    cn(
      'mb-4 mt-3 h-1 w-full overflow-hidden rounded-full bg-border',
      '*:data-[slot=indicator]:h-full *:data-[slot=indicator]:transition-all *:data-[slot=indicator]:duration-500 *:data-[slot=indicator]:ease-out',
      this.strengthColor(),
    ),
  );

  readonly strengthColor = computed(() => {
    const score = this.strengthScore();
    if (score === 0) return '*:data-[slot=indicator]:bg-border';
    if (score <= 1) return '*:data-[slot=indicator]:bg-red-500';
    if (score <= 2) return '*:data-[slot=indicator]:bg-orange-500';
    if (score === 3) return '*:data-[slot=indicator]:bg-amber-500';
    return '*:data-[slot=indicator]:bg-emerald-500';
  });

  readonly strengthText = computed(() => {
    const score = this.strengthScore();
    if (score === 0) return 'Enter a password';
    if (score <= 2) return 'Weak password';
    if (score === 3) return 'Medium password';
    return 'Strong password';
  });

  protected toggleVisibility() {
    this.isVisible.update((prev) => !prev);
  }
}
