import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'sc-combobox',
  imports: [ReactiveFormsModule, NgIf, NgFor, NgTemplateOutlet],
  template: `
    <div class="relative w-full" #container>
      <!-- Label -->
      <label class="mb-1 block text-sm font-medium text-gray-700" *ngIf="label" [for]="id">
        {{ label }}
      </label>

      <!-- Input Group -->
      <div class="relative">
        <input
          class="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          [id]="id"
          [formControl]="searchControl"
          [placeholder]="placeholder"
          [attr.aria-expanded]="isOpen"
          [attr.aria-activedescendant]="activeId"
          [attr.aria-controls]="listboxId"
          [attr.aria-owns]="listboxId"
          [attr.aria-autocomplete]="'list'"
          [attr.aria-haspopup]="'listbox'"
          (focus)="onFocus()"
          (blur)="onBlur()"
          (keydown)="onKeyDown($event)"
          type="text"
          role="combobox"
        />

        <!-- Dropdown arrow -->
        <button
          class="absolute inset-y-0 right-0 flex items-center px-2"
          (click)="toggleDropdown()"
          type="button"
          tabindex="-1"
          aria-hidden="true"
        >
          <svg class="size-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <!-- Dropdown -->
      <div
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg"
        *ngIf="isOpen"
        [id]="listboxId"
        [attr.aria-label]="label || 'Options'"
        role="listbox"
      >
        <div class="p-4 text-center text-gray-500" *ngIf="loading" role="status">Loading...</div>

        <div
          class="p-4 text-center text-gray-500"
          *ngIf="!loading && filteredOptions.length === 0"
          role="status"
        >
          No results found
        </div>

        <ul *ngIf="!loading && filteredOptions.length > 0">
          <li
            class="cursor-pointer px-4 py-2"
            *ngFor="let option of filteredOptions; let i = index"
            [id]="id + '-option-' + i"
            [attr.aria-selected]="i === activeIndex"
            [class.bg-blue-100]="i === activeIndex"
            (click)="selectOption(option)"
            (mouseenter)="activeIndex = i"
            role="option"
          >
            <ng-container
              *ngTemplateOutlet="
                optionTemplate || defaultOptionTemplate;
                context: { $implicit: option }
              "
            ></ng-container>
          </li>
        </ul>
      </div>
    </div>

    <!-- Default option template -->
    <ng-template #defaultOptionTemplate let-option>
      {{ getOptionLabel(option) }}
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCombobox implements OnInit {
  @Input() id = `combobox-${Math.random().toString(36).substr(2, 9)}`;
  @Input() label?: string;
  @Input() placeholder = 'Select an option';
  @Input() options: any[] = [];
  @Input() optionTemplate?: any;
  @Input() loading = false;
  @Input() labelKey = 'label';

  @Output() optionSelected = new EventEmitter<any>();
  @Output() search = new EventEmitter<string>();

  searchControl = new FormControl('');
  isOpen = false;
  activeIndex = -1;
  filteredOptions: any[] = [];
  listboxId = `${this.id}-listbox`;

  private closeTimeout?: any;

  get activeId(): string {
    return this.activeIndex >= 0 ? `${this.id}-option-${this.activeIndex}` : '';
  }

  constructor(private elementRef: ElementRef) {
    // Set up search debounce
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.onSearch(value || '');
      });
  }

  ngOnInit() {
    // Ensure unique IDs
    this.listboxId = `${this.id}-listbox`;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  toggleDropdown() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.filterOptions();
  }

  close() {
    this.isOpen = false;
    this.activeIndex = -1;
  }

  onFocus() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    this.open();
  }

  onBlur() {
    // Delay closing to allow for option selection
    this.closeTimeout = setTimeout(() => this.close(), 200);
  }

  onSearch(query: string) {
    this.search.emit(query);
    this.filterOptions();
  }

  filterOptions() {
    const query = this.searchControl.value?.toLowerCase() || '';
    this.filteredOptions = this.options.filter((option) =>
      this.getOptionLabel(option).toLowerCase().includes(query),
    );
    this.activeIndex = -1;
  }

  selectOption(option: any) {
    this.searchControl.setValue(this.getOptionLabel(option), { emitEvent: false });
    this.optionSelected.emit(option);
    this.close();
  }

  getOptionLabel(option: any): string {
    return typeof option === 'object' ? option[this.labelKey] : option.toString();
  }

  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen) {
          this.open();
        }
        this.activeIndex = Math.min(this.activeIndex + 1, this.filteredOptions.length - 1);
        this.scrollActiveOptionIntoView();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.activeIndex = Math.max(this.activeIndex - 1, -1);
        this.scrollActiveOptionIntoView();
        break;
      case 'Enter':
        event.preventDefault();
        if (this.activeIndex >= 0) {
          this.selectOption(this.filteredOptions[this.activeIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.close();
        break;
    }
  }

  private scrollActiveOptionIntoView() {
    if (this.activeIndex >= 0) {
      const activeOption = document.getElementById(`${this.id}-option-${this.activeIndex}`);
      if (activeOption) {
        activeOption.scrollIntoView({ block: 'nearest' });
      }
    }
  }
}
