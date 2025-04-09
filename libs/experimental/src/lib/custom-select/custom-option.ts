import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'sc-custom-option',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class.block]': 'true',
    '[class.pointer-events-none]': 'true',
    '[class.px-4]': 'true',
    '[class.py-2]': 'true',
    '[class.cursor-pointer]': '!disabled()',
    '[class.cursor-not-allowed]': 'disabled()',
    '[class.select-none]': 'true',
    '[class.hover:bg-gray-100]': '!disabled()',
    '[class.bg-blue-50]': 'isActive',
    '[class.text-blue-700]': 'isActive',
    '[class.bg-gray-50]': 'isFocused && !isActive',
    '[class.text-gray-400]': 'disabled()',
    '[class.opacity-50]': 'disabled()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomOption {
  elementRef = inject(ElementRef);

  readonly value = input<any>();
  readonly disabled = input(false);

  @Output() selected = new EventEmitter<void>();

  isActive = false;
  isFocused = false;
  dropdownOpen = false;

  get label(): string {
    return this.elementRef.nativeElement.textContent.trim();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.disabled()) return;

    event.preventDefault();
    event.stopPropagation();
    this.selected.emit();
  }
}
