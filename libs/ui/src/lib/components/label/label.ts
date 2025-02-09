import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  linkedSignal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'label[sc-label]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'label',
    '[for]': 'for()',
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLabel {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      this.classInput(),
    ),
  );

  readonly forInput = input<string>('', {
    alias: 'for',
  });

  readonly for = linkedSignal(() => this.forInput());
}
