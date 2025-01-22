import { NgTemplateOutlet } from '@angular/common';
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
  imports: [ReactiveFormsModule, NgTemplateOutlet],
  template: `
    <div class="relative w-full" #container>
      <!-- Label -->
      @if (label) {
        <label class="mb-1 block text-sm font-medium text-gray-700" [for]="id">
          {{ label }}
        </label>
      }

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

        <!-- Dropdown button -->
        <button
          class="absolute inset-y-0 right-0 flex items-center px-2"
          [attr.aria-label]="isOpen ? 'Close options' : 'Open options'"
          (keydown)="onButtonKeyDown($event)"
          (click)="handleButtonInteraction($event)"
          type="button"
          tabindex="0"
        >
          <svg class="size-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <!-- Dropdown -->
      @if (isOpen) {
        <div
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg"
          [id]="listboxId"
          [attr.aria-label]="label || 'Options'"
          role="listbox"
        >
          @if (loading) {
            <div class="p-4 text-center text-gray-500" role="status">Loading...</div>
          }
          @if (!loading && filteredOptions.length === 0) {
            <div class="p-4 text-center text-gray-500" role="status">No results found</div>
          }
          @if (!loading && filteredOptions.length > 0) {
            <ul>
              @for (option of filteredOptions; track option; let i = $index) {
                <li
                  class="cursor-pointer px-4 py-2 outline-none"
                  [id]="id + '-option-' + i"
                  [attr.aria-selected]="i === activeIndex"
                  [class.bg-blue-100]="i === activeIndex"
                  (click)="handleOptionClick($event, option)"
                  (keydown)="onOptionKeyDown($event, option)"
                  (mouseenter)="setActiveIndex(i)"
                  role="option"
                  tabindex="0"
                >
                  <ng-container
                    *ngTemplateOutlet="
                      optionTemplate || defaultOptionTemplate;
                      context: { $implicit: option }
                    "
                  ></ng-container>
                </li>
              }
            </ul>
          }
        </div>
      }
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

  constructor(private readonly elementRef: ElementRef) {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.onSearch(value ?? '');
      });
  }

  ngOnInit() {
    this.listboxId = `${this.id}-listbox`;
  }

  // Handle button interactions
  handleButtonInteraction(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.toggleDropdown();
  }

  onButtonKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault();
        event.stopPropagation();
        this.toggleDropdown();
        break;
    }
  }

  // Handle option interactions
  handleOptionClick(event: MouseEvent, option: any) {
    event.preventDefault();
    event.stopPropagation();
    this.selectOption(option);
  }

  onOptionKeyDown(event: KeyboardEvent, option: any) {
    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault();
        event.stopPropagation();
        this.selectOption(option);
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.moveActiveIndex(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.moveActiveIndex(-1);
        break;
      case 'Home':
        event.preventDefault();
        this.setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        this.setActiveIndex(this.filteredOptions.length - 1);
        break;
    }
  }

  moveActiveIndex(delta: number) {
    const newIndex = this.activeIndex + delta;
    if (newIndex >= 0 && newIndex < this.filteredOptions.length) {
      this.setActiveIndex(newIndex);
    }
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
    this.scrollActiveOptionIntoView();
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
  }

  onBlur() {
    this.closeTimeout = setTimeout(() => this.close(), 200);
  }

  onSearch(query: string) {
    this.search.emit(query);
    this.filterOptions();
  }

  filterOptions() {
    const query = this.searchControl.value?.toLowerCase() ?? '';
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
        this.moveActiveIndex(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.moveActiveIndex(-1);
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
      case 'Tab':
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
