import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed } from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScButtonBase, buttonVariants } from '../button';

@Component({
  selector: 'button[sc-input-number-incrementer]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputNumberIncrementer extends ScButtonBase {
  protected override readonly class = computed(() =>
    cn(
      buttonVariants({ variant: this.variant(), size: this.size() }),
      'absolute right-1 top-1  size-8',
      this.classInput(),
    ),
  );
}
