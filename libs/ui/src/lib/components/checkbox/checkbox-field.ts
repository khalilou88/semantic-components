import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  afterNextRender,
  computed,
  contentChild,
  inject,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScLabel } from '../label';
import { ScCheckbox } from './checkbox';

@Component({
  selector: 'sc-checkbox-field',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'date-slot': 'control',
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckboxField {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  readonly id = signal<string>(inject(_IdGenerator).getId('sc-checkbox-field-'));

  readonly scLabel = contentChild(ScLabel);

  readonly scCheckbox = contentChild(ScCheckbox);

  constructor() {
    afterNextRender(() => {
      this.scLabel()?.for.set(this.id());
      this.scCheckbox()?.id.set(this.id());
    });
  }
}
