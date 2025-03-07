import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  linkedSignal,
  output,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'input[sc-switch]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[id]': 'id()',
    type: 'checkbox',
    '[checked]': 'checked()',
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSwitch {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'appearance-none',
      'w-11 h-6 relative cursor-pointer inline-block',
      'focus:outline-0',
      'border-0',
      'focus:ring-offset-transparent',
      'focus:ring-transparent',
      'focus-within:ring-0',
      'focus:shadow-none',

      'relative', // Make sure positioning context is established

      // Use the new pseudo-element syntax if it changed
      '[&::after]:absolute [&::before]:absolute',
      '[&::after]:top-0 [&::before]:top-0',
      '[&::after]:block [&::before]:inline-block',
      '[&::before]:rounded-full [&::after]:rounded-full',

      "[&::after]:content-[''] [&::after]:w-5 [&::after]:h-5 [&::after]:mt-0.5 [&::after]:ml-0.5",
      '[&::after]:shadow-md [&::after]:duration-100',

      "[&::before]:content-[''] [&::before]:w-10 [&::before]:h-full",
      '[&::before]:shadow-[inset_0_0_#000]',

      '[&::after]:bg-white dark:[&::after]:bg-gray-50',
      '[&::before]:bg-gray-300 dark:[&::before]:bg-gray-600',
      '[&:checked]:[&::before]:bg-primary dark:[&:checked]:[&::before]:bg-primary',
      '[&:checked]:[&::after]:duration-300 [&:checked]:[&::after]:translate-x-4',

      '[&:disabled]:[&::after]:bg-opacity-75 [&:disabled]:cursor-not-allowed',
      '[&:disabled]:checked:[&::before]:bg-opacity-40',

      this.classInput(),
    ),
  );

  readonly idInput = input<string>(inject(_IdGenerator).getId('sc-switch-'), {
    alias: 'id',
  });
  readonly id = linkedSignal(() => this.idInput());

  readonly checkedInput = input<boolean, unknown>(false, {
    alias: 'checked',
    transform: booleanAttribute,
  });
  protected readonly checked = linkedSignal(() => this.checkedInput());
  readonly checkedChange = output<boolean>();

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  protected readonly disabled = linkedSignal(() => this.disabledInput());
}
