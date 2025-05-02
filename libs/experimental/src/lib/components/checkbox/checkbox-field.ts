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

import { ScLabel } from '@semantic-components/ui';
import { cn } from '@semantic-components/utils';

import { ScCheckbox1 } from './checkbox1';

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

  protected readonly class = computed(() =>
    cn(
      // Base layout
      'grid grid-cols-[1.125rem_1fr] items-center gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]',

      // Control layout
      '*:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 *:data-[slot=control]:justify-self-center',

      // Label layout
      '*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1 *:data-[slot=label]:justify-self-start',

      // Description layout
      '*:data-[slot=description]:col-start-2 *:data-[slot=description]:row-start-2',

      // With description
      '**:data-[slot=label]:has-data-[slot=description]:font-medium',
      this.classInput(),
    ),
  );

  readonly id = signal<string>(inject(_IdGenerator).getId('sc-checkbox-field-'));

  readonly scLabel = contentChild(ScLabel);

  readonly scCheckbox = contentChild(ScCheckbox1);

  constructor() {
    afterNextRender(() => {
      this.scLabel()?.for.set(this.id());
      this.scCheckbox()?.id.set(this.id());
    });
  }
}
