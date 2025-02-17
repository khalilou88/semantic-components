import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  afterRenderEffect,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  output,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'input[sc-checkbox2]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[id]': 'id()',
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckbox2 {
  private readonly hostRef = inject(ElementRef);

  readonly idInput = input<string>(inject(_IdGenerator).getId('sc-checkbox-'), {
    alias: 'id',
  });
  readonly id = linkedSignal(() => this.idInput());

  readonly type = input.required<'checkbox'>();

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

  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  constructor() {
    afterRenderEffect(() => {
      this.hostRef.nativeElement.indeterminate = this.indeterminate();
    });

    effect(() => {
      this.checkedChange.emit(this.checked());
    });
  }
}
