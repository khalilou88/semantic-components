import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
  model,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-checkbox-group',
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
export class ScCheckboxGroup {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('space-y-2', this.classInput()));

  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  readonly value = model<unknown>(undefined);
}
