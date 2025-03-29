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
import { ScRadio } from './radio';

@Component({
  selector: 'sc-radio-item',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    'data-slot': 'radio-item',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioItem {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('flex items-center space-x-2', this.classInput()));

  readonly id = signal<string>(inject(_IdGenerator).getId('sc-radio-'));

  readonly scLabel = contentChild(ScLabel);

  readonly scRadio = contentChild(ScRadio);

  constructor() {
    afterNextRender(() => {
      this.scLabel()?.for.set(this.id());
      this.scRadio()?.id.set(this.id());
    });
  }
}
