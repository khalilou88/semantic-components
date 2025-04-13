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
    '[type]': 'type()',
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
      // Base styling
      'appearance-none',
      'w-9 h-5',
      'relative',
      'cursor-pointer',
      'inline-block',
      'transition-colors duration-200',

      // Focus handling
      'focus:outline-0',
      'border-0',
      'focus:ring-offset-transparent',
      'focus:ring-transparent',
      'focus-within:ring-0',
      'focus:shadow-none',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',

      // Pseudo-element positioning
      '[&::after]:absolute [&::before]:absolute',
      '[&::after]:top-0 [&::before]:top-0',
      '[&::after]:block [&::before]:inline-block',
      '[&::before]:rounded-full [&::after]:rounded-full',

      // After element (toggle knob)
      "[&::after]:content-['']",
      '[&::after]:w-4 [&::after]:h-4',
      '[&::after]:mt-0.5 [&::after]:ml-0.5',
      '[&::after]:shadow-md',
      '[&::after]:duration-200',
      '[&::after]:bg-background',
      '[&::after]:transition-transform',

      // Before element (track)
      "[&::before]:content-['']",
      '[&::before]:w-9 [&::before]:h-full',
      '[&::before]:shadow-[inset_0_0_#000]',
      '[&::before]:bg-input',
      '[&::before]:transition-colors [&::before]:duration-200',

      // Hover state
      'hover:[&::before]:bg-input/90',
      'hover:[&:checked]:[&::before]:bg-primary/90',

      // Checked state
      '[&:checked]:[&::before]:bg-primary',
      '[&:checked]:[&::after]:duration-300',
      '[&:checked]:[&::after]:translate-x-4',

      // Disabled state
      '[&:disabled]:[&::after]:bg-opacity-75',
      '[&:disabled]:cursor-not-allowed',
      '[&:disabled]:checked:[&::before]:bg-opacity-40',
      '[&:disabled]:[&::before]:bg-muted/50',

      // Custom classes
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

  readonly type = input<'checkbox'>('checkbox');
}
