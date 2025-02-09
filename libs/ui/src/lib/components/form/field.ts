import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScInput } from '../input';
import { ScLabel } from '../label';

@Component({
  selector: 'sc-field',
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
export class ScField {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  readonly id = signal<string>(inject(_IdGenerator).getId('sc-field-'));

  readonly scInput = viewChild(ScInput);

  readonly scLabel = viewChild(ScLabel);

  constructor() {
    afterNextRender(() => {
      console.log(this.id());

      this.scInput()?.setId(this.id());
      this.scLabel()?.setFor(this.id());
    });
  }
}
