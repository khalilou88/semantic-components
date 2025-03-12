import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ButtonVariants, ScButtonBase, buttonVariants } from '../button';

@Component({
  selector: 'button[sc-date-picker-toggle]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDatePickerToggle extends ScButtonBase {
  override readonly variantInput = input<ButtonVariants['variant']>('ghost', {
    alias: 'variant',
  });

  protected override readonly class = computed(() =>
    cn(
      buttonVariants({ variant: this.variant(), size: this.size() }),
      'absolute inset-y-0 end-0 pe-4',
      this.classInput(),
    ),
  );

  readonly toggled = output<void>();

  protected toggle() {
    this.toggled.emit();
  }
}
