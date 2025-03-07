import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'sc-otp-input',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  template: `
    <div class="flex justify-center my-5">
      <form [formGroup]="otpForm">
        <div class="flex space-x-2 sm:space-x-4" formArrayName="otpDigits">
          <ng-container *ngFor="let control of otpControls.controls; let i = index">
            <input
              class="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg font-semibold bg-gray-50 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              [formControlName]="i"
              [type]="inputType"
              [class]="inputClass"
              [ngClass]="{ 'border-red-500': control.invalid && control.touched }"
              (keydown)="onKeyDown($event, i)"
              (keyup)="onKeyUp($event, i)"
              (paste)="onPaste($event)"
              (focus)="onFocus($event)"
              maxlength="1"
              autocomplete="one-time-code"
            />
          </ng-container>
        </div>
      </form>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpInput implements OnInit {
  @Input() length = 6;
  @Input() allowedChars = '0123456789';
  @Input() inputType = 'tel';
  @Input() inputClass = 'otp-input';
  @Output() otpChange = new EventEmitter<string>();
  @Output() otpCompleted = new EventEmitter<string>();

  otpForm!: FormGroup;
  otpControls!: FormArray;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.otpControls = this.fb.array([]);
    this.otpForm = this.fb.group({
      otpDigits: this.otpControls,
    });

    // Create form controls based on length
    for (const _ of Array(this.length)) {
      this.otpControls.push(
        this.fb.control('', [Validators.required, Validators.pattern(`[${this.allowedChars}]`)]),
      );
    }
  }

  // Focus to the first empty input or the input at the index provided
  focusInput(index?: number): void {
    const inputs = document.getElementsByClassName(this.inputClass);

    if (index !== undefined) {
      const input = inputs[index] as HTMLInputElement;
      if (input) {
        input.focus();
        return;
      }
    }

    // Find first empty input
    for (const input of Array.from(inputs)) {
      const htmlInput = input as HTMLInputElement;
      if (!htmlInput.value) {
        htmlInput.focus();
        return;
      }
    }
  }

  onKeyDown(event: KeyboardEvent, index: number): void {
    const isBackspace = event.key === 'Backspace';
    const isDelete = event.key === 'Delete';
    const isLeftArrow = event.key === 'ArrowLeft';
    const isRightArrow = event.key === 'ArrowRight';

    // Allow navigation keys
    if (isBackspace || isDelete || isLeftArrow || isRightArrow) {
      return;
    }

    // Prevent default for non-allowed characters
    if (!this.allowedChars.includes(event.key)) {
      event.preventDefault();
    }
  }

  onKeyUp(event: KeyboardEvent, index: number): void {
    const isBackspace = event.key === 'Backspace';
    const isDelete = event.key === 'Delete';
    const isLeftArrow = event.key === 'ArrowLeft';
    const isRightArrow = event.key === 'ArrowRight';
    const target = event.target as HTMLInputElement;

    // Handle navigation keys
    if (isBackspace || isDelete) {
      // Clear current input and focus previous on backspace
      if (isBackspace && index > 0 && !target.value) {
        this.focusInput(index - 1);
      }
      return;
    } else if (isLeftArrow && index > 0) {
      this.focusInput(index - 1);
      return;
    } else if (isRightArrow && index < this.length - 1) {
      this.focusInput(index + 1);
      return;
    }

    // Auto focus next empty input
    if (target.value && index < this.length - 1) {
      this.focusInput(index + 1);
    }

    // Emit current OTP value
    this.emitOtpValue();
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();

    const clipboardData = event.clipboardData;
    if (!clipboardData) return;

    const pastedText = clipboardData.getData('text');
    if (!pastedText) return;

    // Check if pasted text matches allowed characters
    const validPastedText = [...pastedText]
      .filter((char) => this.allowedChars.includes(char))
      .slice(0, this.length);

    // Fill in the OTP inputs with pasted valid characters
    validPastedText.forEach((char, index) => {
      if (index < this.length) {
        this.otpControls.at(index).setValue(char);
      }
    });

    // Focus next empty input or last input if all filled
    const nextIndex =
      validPastedText.length < this.length ? validPastedText.length : this.length - 1;
    this.focusInput(nextIndex);

    // Emit current OTP value
    this.emitOtpValue();
  }

  private emitOtpValue(): void {
    const otpValue = this.otpControls.value.join('');
    this.otpChange.emit(otpValue);

    // Check if OTP is complete and emit completed event
    if (otpValue.length === this.length && !this.otpControls.invalid) {
      this.otpCompleted.emit(otpValue);
    }
  }

  onFocus(event: any) {
    event.target.select();
  }
}
