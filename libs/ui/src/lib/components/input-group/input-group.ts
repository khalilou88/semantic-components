import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-input-group',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    'data-slot': 'control',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputGroup {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'w-full',
      'grid grid-cols-[24px_1fr_24px]',
      //[&>[data-slot=icon]]:fill-neutral-500
      '[&>[data-slot=icon]:first-child]:col-start-1 [&>[data-slot=icon]:last-child]:col-start-3 *:data-[slot=icon]:row-start-1 *:data-[slot=icon]:z-10 *:data-[slot=icon]:place-self-center *:data-[slot=icon]:size-4 ',
      '*:data-[slot=control]:col-span-3 *:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1',
      '[&>[data-slot=icon]+[data-slot=control]]:pl-6',
      '[&:has([data-slot=control]+[data-slot=icon])>[data-slot=control]]:pr-6',
      this.classInput(),
    ),
  );
}
