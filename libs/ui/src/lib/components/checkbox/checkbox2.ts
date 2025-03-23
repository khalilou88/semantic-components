import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  afterRenderEffect,
  booleanAttribute,
  computed,
  inject,
  input,
  linkedSignal,
  output,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

export interface ScCheckboxChange {
  checked: boolean;
  value: string;
}

@Component({
  selector: 'input[sc-checkbox2]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[id]': 'id()',
    '[type]': 'type()',
    '[class]': 'class()',
    '[checked]': 'checked()',
    '(click)': 'handleClick($event)',
  },
  styles: `
    :root {
      --checkbox-checked-bg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-check'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
      --checkbox-indeterminate-bg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-minus'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckbox2 {
  private readonly hostRef = inject(ElementRef);

  readonly idInput = input<string>(inject(_IdGenerator).getId('sc-checkbox-'), {
    alias: 'id',
  });
  readonly id = linkedSignal(() => this.idInput());

  readonly type = input<'checkbox'>('checkbox');

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      //Base styles
      'appearance-none', //removes default browser styling
      'w-6 h-6', //sets width and height (24px)
      'border-2 border-gray-300', //adds border
      'rounded', //adds border radius
      'bg-white', //sets background color
      'cursor-pointer',
      'outline-none',
      'transition-all duration-200', //adds smooth transitions

      //Interactive states
      'hover:border-gray-600', //darkens border on hover
      'focus:border-blue-500', //changes border color on focus
      'focus:ring-2 focus:ring-blue-500/20', //adds focus ring

      //Checked state
      'checked:bg-blue-500 checked:border-blue-500', //changes background and border when checked
      'checked:hover:bg-blue-600 checked:hover:border-blue-600', //darker blue on hover when checked
      // Applies SVG background image when checked
      '[&:checked]:bg-[image:var(--checkbox-checked-bg)]',
      'checked:bg-no-repeat', // Prevents background image from repeating
      'checked:bg-center', // Centers the background image
      'checked:bg-contain', // Scales image to fit while maintaining aspect ratio

      //indeterminate
      'indeterminate:bg-blue-500 indeterminate:border-blue-500', //changes background and border when checked
      'indeterminate:hover:bg-blue-600 indeterminate:hover:border-blue-600', //darker blue on hover when checked
      '[&:indeterminate]:bg-[image:var(--checkbox-indeterminate-bg)]',
      'indeterminate:bg-no-repeat', // Prevents background image from repeating
      'indeterminate:bg-center', // Centers the background image
      'indeterminate:bg-contain', // Scales image to fit while maintaining aspect ratio

      //Disabled state
      'disabled:bg-gray-100 disabled:border-gray-300', //styles for disabled state
      'disabled:cursor-not-allowed', //changes cursor
      'disabled:checked:bg-gray-300 disabled:checked:border-gray-300', //styles for checked and disabled

      this.classInput(),
    ),
  );

  readonly indeterminate = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  readonly checkedInput = input<boolean, unknown>(false, {
    alias: 'checked',
    transform: booleanAttribute,
  });
  protected readonly checked = linkedSignal(() => this.checkedInput());
  readonly checkedChange = output<boolean>();

  readonly value = input<string>('');
  readonly change = output<ScCheckboxChange>();

  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  constructor() {
    afterRenderEffect(() => {
      this.hostRef.nativeElement.indeterminate = this.indeterminate();
    });
  }

  protected handleClick(event: MouseEvent): void {
    this.checked.update((checked: boolean) => !checked);
    this.checkedChange.emit(this.checked());
    this.change.emit({ checked: this.checked(), value: this.value() });
    event.preventDefault();
  }
}
