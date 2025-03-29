import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'input[sc-radio]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    '[type]': 'type()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadio {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'relative',
      'appearance-none w-5 h-5 rounded-full border-2 border-gray-300 cursor-pointer checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300',

      "[&::before]:content-['']",
      '[&::before]:absolute [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2 [&::before]:w-3 [&::before]:h-3 [&::before]:rounded-full [&::before]:bg-blue-500 [&::before]:opacity-0 [&::before]:transform [&::before]:scale-0 [&::before]:transition-all [&::before]:duration-200',

      '[&:checked]:[&::before]:opacity-100 [&:checked]:[&::before]:scale-100',

      this.classInput(),
    ),
  );

  readonly type = input<'radio'>('radio');
}
