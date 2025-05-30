import { CdkCombobox, CdkComboboxModule } from '@angular/cdk-experimental/combobox';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subject } from 'rxjs';

export interface ScComboBoxOption {
  value: any;
  label: string;
  disabled?: boolean;
  description?: string;
}

@Component({
  selector: 'sc-combobox',
  imports: [CdkComboboxModule, CommonModule, CdkListbox, CdkOption],
  template: `
    <div class="relative w-full" [class.opacity-50]="disabled">
      <!-- Combobox Container -->
      <div class="relative" #combobox="cdkCombobox" [disabled]="disabled" cdkCombobox>
        <!-- Trigger Input -->
        <input
          class="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 pr-10 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
          #input
          [value]="displayValue"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [readonly]="!searchable"
          [attr.aria-label]="ariaLabel"
          [attr.aria-labelledby]="labelId"
          (input)="onInputChange($event)"
          (focus)="onInputFocus()"
          (blur)="onInputBlur()"
          type="text"
          cdkComboboxInput
        />

        <!-- Dropdown Arrow -->
        <button
          class="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
          [attr.aria-label]="'Open dropdown'"
          [disabled]="disabled"
          type="button"
          cdkComboboxTrigger
        >
          <svg
            class="h-4 w-4 opacity-50 transition-transform duration-200"
            [class.rotate-180]="combobox.isOpen()"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <!-- Popup Panel -->
        <div
          class="absolute z-50 mt-1 w-full min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
          #popup="cdkComboboxPopup"
          cdkComboboxPopup
        >
          <!-- Search Header (when searchable) -->
          <div
            class="border-b border-slate-200 p-2 dark:border-slate-800"
            *ngIf="searchable && showSearchInPopup"
          >
            <div class="flex items-center">
              <svg
                class="mr-2 h-4 w-4 shrink-0 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span class="text-sm text-slate-600 dark:text-slate-300">Type to search...</span>
            </div>
          </div>

          <!-- Options List -->
          <div class="max-h-60 overflow-auto p-1" role="listbox" cdkListbox>
            <div
              class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 data-[selected]:bg-slate-100 data-[selected]:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50 dark:data-[selected]:bg-slate-800 dark:data-[selected]:text-slate-50"
              *ngFor="let option of filteredOptions; trackBy: trackByValue"
              [cdkOption]="option.value"
              [cdkOptionDisabled]="option.disabled"
              [class.opacity-50]="option.disabled"
              [class.cursor-not-allowed]="option.disabled"
              (cdkOptionSelectionChange)="onOptionSelected(option, $event)"
              cdkOption
            >
              <!-- Selection Indicator -->
              <div class="flex h-4 w-4 items-center justify-center mr-2">
                <svg
                  class="h-4 w-4"
                  *ngIf="isSelected(option)"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <!-- Option Content -->
              <div class="flex-1 min-w-0">
                <div class="truncate font-medium">{{ option.label }}</div>
                <div
                  class="truncate text-xs text-slate-500 dark:text-slate-400"
                  *ngIf="option.description"
                >
                  {{ option.description }}
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div
              class="relative flex cursor-default select-none items-center rounded-sm px-2 py-6 text-center text-sm text-slate-500 dark:text-slate-400"
              *ngIf="filteredOptions.length === 0"
            >
              <div class="flex-1">
                <div class="font-medium">No results found</div>
                <div class="text-xs mt-1" *ngIf="searchValue">
                  No options match "{{ searchValue }}"
                </div>
              </div>
            </div>

            <!-- Create New Option (if enabled) -->
            <div
              class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 border-t border-slate-200 dark:border-slate-800 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50"
              *ngIf="allowCustomValues && searchValue && !hasExactMatch"
              [cdkOption]="searchValue"
              (cdkOptionSelectionChange)="onCustomValueSelected($event)"
              cdkOption
            >
              <div class="flex h-4 w-4 items-center justify-center mr-2">
                <svg
                  class="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div class="flex-1">
                <div class="font-medium">Create "{{ searchValue }}"</div>
                <div class="text-xs text-slate-500 dark:text-slate-400">Add new option</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScCombobox),
      multi: true,
    },
  ],
})
export class ScCombobox implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() options: ScComboBoxOption[] = [];
  @Input() placeholder = 'Select an option...';
  @Input() disabled = false;
  @Input() searchable = true;
  @Input() showSearchInPopup = false;
  @Input() allowCustomValues = false;
  @Input() ariaLabel?: string;
  @Input() labelId?: string;
  @Input() clearable = true;

  @Output() selectionChange = new EventEmitter<ScComboBoxOption | null>();
  @Output() customValueCreated = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();

  @ViewChild('input', { static: true }) inputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('combobox', { static: true }) combobox!: CdkCombobox<any>;

  selectedOption: ScComboBoxOption | null = null;
  filteredOptions: ScComboBoxOption[] = [];
  searchValue = '';
  displayValue = '';

  private readonly destroy$ = new Subject<void>();
  private onChange = (value: any) => {};
  private onTouched = () => {};

  ngOnInit() {
    this.filteredOptions = [...this.options];
    this.updateDisplayValue();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    this.selectedOption = this.options.find((option) => option.value === value) || null;
    this.updateDisplayValue();
    this.filterOptions();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;
    this.displayValue = target.value;

    if (this.searchable) {
      this.filterOptions();
      this.searchChange.emit(this.searchValue);
    }

    // Clear selection if input doesn't match selected option
    if (this.selectedOption && this.selectedOption.label !== this.searchValue) {
      this.clearSelection();
    }
  }

  onInputFocus(): void {
    if (!this.combobox.isOpen()) {
      this.combobox.open();
    }
  }

  onInputBlur(): void {
    this.onTouched();

    // Restore display value if no valid selection
    setTimeout(() => {
      if (!this.combobox.isOpen()) {
        this.updateDisplayValue();
      }
    }, 150);
  }

  onOptionSelected(option: ScComboBoxOption, event: any): void {
    const selected = event.selected;
    if (selected && !option.disabled) {
      this.selectedOption = option;
      this.displayValue = option.label;
      this.searchValue = option.label;
      this.onChange(option.value);
      this.selectionChange.emit(option);
      this.combobox.close();
    }
  }

  onCustomValueSelected(event: any): void {
    const selected = event.selected;
    if (selected && this.allowCustomValues && this.searchValue.trim()) {
      const customOption: ScComboBoxOption = {
        value: this.searchValue.trim(),
        label: this.searchValue.trim(),
      };

      this.selectedOption = customOption;
      this.displayValue = customOption.label;
      this.onChange(customOption.value);
      this.selectionChange.emit(customOption);
      this.customValueCreated.emit(this.searchValue.trim());
      this.combobox.close();
    }
  }

  isSelected(option: ScComboBoxOption): boolean {
    return this.selectedOption?.value === option.value;
  }

  get hasExactMatch(): boolean {
    return this.filteredOptions.some(
      (option) => option.label.toLowerCase() === this.searchValue.toLowerCase(),
    );
  }

  private filterOptions(): void {
    if (!this.searchable || !this.searchValue.trim()) {
      this.filteredOptions = [...this.options];
      return;
    }

    const searchTerm = this.searchValue.toLowerCase();
    this.filteredOptions = this.options.filter(
      (option) =>
        option.label.toLowerCase().includes(searchTerm) ||
        option.description?.toLowerCase().includes(searchTerm),
    );
  }

  private updateDisplayValue(): void {
    this.displayValue = this.selectedOption ? this.selectedOption.label : '';
    this.searchValue = this.displayValue;
  }

  private clearSelection(): void {
    this.selectedOption = null;
    this.onChange(null);
    this.selectionChange.emit(null);
  }

  trackByValue(index: number, option: ScComboBoxOption): any {
    return option.value;
  }

  // Public methods for programmatic control
  public open(): void {
    this.combobox.open();
  }

  public close(): void {
    this.combobox.close();
  }

  public focus(): void {
    this.inputRef.nativeElement.focus();
  }

  public clear(): void {
    if (this.clearable) {
      this.displayValue = '';
      this.searchValue = '';
      this.clearSelection();
      this.filterOptions();
    }
  }
}
