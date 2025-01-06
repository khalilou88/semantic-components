import { FocusMonitor } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  OnDestroy,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  model,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControl,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Subject } from 'rxjs';

/** Data structure for holding telephone number. */
export class TelModel {
  constructor(
    public area: string,
    public exchange: string,
    public subscriber: string,
  ) {}
}

@Component({
  selector: 'sc-tel-input',
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <div
      class=""
      [formGroup]="parts"
      [attr.aria-labelledby]="getLabelId()"
      (focusin)="onFocusIn()"
      (focusout)="onFocusOut($event)"
      role="group"
    >
      <input
        class=""
        #area
        (input)="_handleInput(parts.controls.area, exchange)"
        formControlName="area"
        size="3"
        maxLength="3"
        aria-label="Area code"
      />
      <span class="">&ndash;</span>
      <input
        class=""
        #exchange
        (input)="_handleInput(parts.controls.exchange, subscriber)"
        (keyup.backspace)="autoFocusPrev(parts.controls.exchange, area)"
        formControlName="exchange"
        maxLength="3"
        size="3"
        aria-label="Exchange code"
      />
      <span class="">&ndash;</span>
      <input
        class=""
        #subscriber
        (input)="_handleInput(parts.controls.subscriber)"
        (keyup.backspace)="autoFocusPrev(parts.controls.subscriber, exchange)"
        formControlName="subscriber"
        maxLength="4"
        size="4"
        aria-label="Subscriber number"
      />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]': 'id',
  },
})
export class TelInputComponent implements ControlValueAccessor, DoCheck, OnDestroy {
  private readonly _parentForm = inject(NgForm, { optional: true });
  private readonly _parentFormGroup = inject(FormGroupDirective, { optional: true });

  static nextId = 0;
  readonly areaInput = viewChild.required<HTMLInputElement>('area');
  readonly exchangeInput = viewChild.required<HTMLInputElement>('exchange');
  readonly subscriberInput = viewChild.required<HTMLInputElement>('subscriber');

  ngControl = inject(NgControl, { optional: true, self: true });

  readonly parts: FormGroup<{
    area: FormControl<string | null>;
    exchange: FormControl<string | null>;
    subscriber: FormControl<string | null>;
  }>;
  readonly stateChanges = new Subject<void>();
  readonly touched = signal(false);
  readonly controlType = 'sma-tel-input';
  readonly id = `sma-tel-input-${TelInputComponent.nextId++}`;
  readonly _userAriaDescribedBy = input<string>('', { alias: 'aria-describedby' });
  readonly _placeholder = input<string>('', { alias: 'placeholder' });
  readonly _required = input<boolean, unknown>(false, {
    alias: 'required',
    transform: booleanAttribute,
  });
  readonly _disabledByInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  readonly _value = model<TelModel | null>(null, { alias: 'value' });
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  getLabelId() {
    return '';
  }

  private readonly _focused = signal(false);
  private readonly disabledByCva = signal(false);
  private readonly _disabled = computed(() => this._disabledByInput() || this.disabledByCva());
  private readonly _focusMonitor = inject(FocusMonitor);
  private readonly _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  get focused(): boolean {
    return this._focused();
  }

  get empty() {
    const {
      value: { area, exchange, subscriber },
    } = this.parts;

    return !area && !exchange && !subscriber;
  }

  // get shouldLabelFloat() {
  //   return this.focused || !this.empty;
  // }

  get userAriaDescribedBy() {
    return this._userAriaDescribedBy();
  }

  get placeholder(): string {
    return this._placeholder();
  }

  get required(): boolean {
    return this._required();
  }

  get disabled(): boolean {
    return this._disabled();
  }

  get value(): TelModel | null {
    return this._value();
  }

  // get errorState(): boolean {
  //   return this.parts.invalid && this.touched();
  // }

  get errorState(): boolean {
    return this._errorState ?? false;
  }

  constructor() {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.parts = inject(FormBuilder).group({
      area: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      exchange: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      subscriber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    });

    effect(() => {
      // Read signals to trigger effect.
      this._placeholder();
      this._required();
      this._disabled();
      this._focused();
      // Propagate state changes.
      untracked(() => this.stateChanges.next());
    });

    effect(() => {
      if (this._disabled()) {
        untracked(() => this.parts.disable());
      } else {
        untracked(() => this.parts.enable());
      }
    });

    effect(() => {
      const value = this._value() || new TelModel('', '', '');
      untracked(() => this.parts.setValue(value));
    });

    this.parts.statusChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      this.stateChanges.next();
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.parts.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      const tel = this.parts.valid
        ? new TelModel(
            this.parts.value.area ?? '',
            this.parts.value.exchange ?? '',
            this.parts.value.subscriber ?? '',
          )
        : null;
      this._updateValue(tel);
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  onFocusIn() {
    if (!this._focused()) {
      this._focused.set(true);
    }
  }

  onFocusOut(event: FocusEvent) {
    if (!this._elementRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.touched.set(true);
      this._focused.set(false);
      this.onTouched();
    }
  }

  autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement): void {
    if (!control.errors && nextElement) {
      this._focusMonitor.focusVia(nextElement, 'program');
    }
  }

  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this._focusMonitor.focusVia(prevElement, 'program');
    }
  }

  //TODO
  setDescribedByIds(ids: string[]) {
    const controlElement = this._elementRef.nativeElement.querySelector(
      '.example-tel-input-container',
    )!;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  onContainerClick() {
    if (this.parts.controls.subscriber.valid) {
      this._focusMonitor.focusVia(this.subscriberInput(), 'program');
    } else if (this.parts.controls.exchange.valid) {
      this._focusMonitor.focusVia(this.subscriberInput(), 'program');
    } else if (this.parts.controls.area.valid) {
      this._focusMonitor.focusVia(this.exchangeInput(), 'program');
    } else {
      this._focusMonitor.focusVia(this.areaInput(), 'program');
    }
  }

  writeValue(tel: TelModel | null): void {
    this._updateValue(tel);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledByCva.set(isDisabled);
  }

  _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
    this.autoFocusNext(control, nextElement);
    this.onChange(this.value);
  }

  private _updateValue(tel: TelModel | null) {
    const current = this._value();
    if (
      tel === current ||
      (tel?.area === current?.area &&
        tel?.exchange === current?.exchange &&
        tel?.subscriber === current?.subscriber)
    ) {
      return;
    }
    this._value.set(tel);
  }

  //error

  /** Whether the component is in an error state. */
  _errorState: boolean | undefined = false;

  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }

  private updateErrorState() {
    const parentSubmitted = this._parentFormGroup?.submitted || this._parentForm?.submitted;
    const touchedOrParentSubmitted = this.touched() || parentSubmitted;

    const newState = (this.ngControl?.invalid || this.parts.invalid) && touchedOrParentSubmitted;

    if (this.errorState !== newState) {
      this._errorState = newState;
      this.stateChanges.next(); // Notify listeners of state changes.
    }
  }
}
