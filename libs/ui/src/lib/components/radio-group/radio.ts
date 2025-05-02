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
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScRadioGroup } from './radio-group';

@Component({
  selector: 'input[sc-radio]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    '[id]': 'id()',
    '[name]': 'name()',
    '[disabled]': 'disabled()',
    '[value]': 'value()',
    '[checked]': 'checked()',
    '[type]': 'type()',
    '(click)': 'select()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadio {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'relative',
      'appearance-none',
      // 'size-5 rounded-full border-2 border-gray-300 cursor-pointer checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300',

      'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',

      "[&::before]:content-['']",
      '[&::before]:absolute [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2 [&::before]:size-2.5 [&::before]:rounded-full [&::before]:bg-primary [&::before]:opacity-0 [&::before]:transform [&::before]:scale-0 [&::before]:transition-all [&::before]:duration-200',

      'checked:[&::before]:opacity-100 checked:[&::before]:scale-100',

      this.classInput(),
    ),
  );

  readonly type = input<'radio'>('radio');

  private readonly scRadioGroup = inject(ScRadioGroup);

  protected readonly name = computed(() => {
    return this.scRadioGroup.name();
  });

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  readonly disabled = computed(() => this.disabledInput() || this.scRadioGroup.disabled());

  readonly value = input.required<string>();

  readonly idInput = input<string>(inject(_IdGenerator).getId('sc-radio-'), {
    alias: 'id',
  });

  readonly id = linkedSignal(() => this.idInput());

  protected readonly checked = computed(() => {
    return this.value() === this.scRadioGroup.value();
  });

  protected select() {
    if (this.disabled()) {
      return;
    }

    this.scRadioGroup.setValue(this.value());
  }
}
