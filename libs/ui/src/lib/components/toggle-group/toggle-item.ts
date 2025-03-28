import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScToggleBase, toggleVariants } from '../toggle/toggle-base';

@Component({
  selector: 'button[sc-toggle-item]',
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
export class ScToggleItem extends ScToggleBase {
  protected override readonly class = computed(() =>
    cn(
      toggleVariants({ variant: this.variant(), size: this.size() }),
      'flex items-center justify-center gap-1',
      this.classInput(),
    ),
  );

  readonly value = input<string>();
}
