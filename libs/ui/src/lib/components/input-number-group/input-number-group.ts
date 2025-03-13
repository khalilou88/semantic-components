import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  afterNextRender,
  computed,
  contentChild,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScInputNumberDecrementer } from '../input-number/input-number-decrementer';
import { ScInputNumberIncrementer } from '../input-number/input-number-incrementer';

@Component({
  selector: 'div[sc-input-number-group]',
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
export class ScInputNumberGroup {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('relative', this.classInput()));

  private readonly scInputNumberIncrementer = contentChild(ScInputNumberIncrementer);
  private readonly scInputNumberDecrementer = contentChild(ScInputNumberDecrementer);

  constructor() {
    afterNextRender(() => {
      this.scInputNumberIncrementer()?.incremented.subscribe(() => {
        console.log('incremented');
      });

      this.scInputNumberDecrementer()?.decremented.subscribe(() => {
        console.log('decremented');
      });
    });
  }
}
