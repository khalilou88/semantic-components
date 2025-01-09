import { CdkListbox } from '@angular/cdk/listbox';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
  signal,
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
  hostDirectives: [
    {
      directive: CdkListbox,
      inputs: [
        'cdkListboxDisabled: disabled',
        'cdkListboxMultiple: multiple',
        // 'cdkListboxValue: value',
      ],
      // outputs: ['cdkListboxValueChange: valueChange'],
    },
  ],
})
export class ScCheckboxGroup {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  readonly disabled = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });

  protected readonly multiple = signal(true);

  // readonly value = model<unknown>(undefined);
}
