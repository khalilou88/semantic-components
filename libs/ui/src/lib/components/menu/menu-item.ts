import { CdkMenuItem } from '@angular/cdk/menu';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'button[sc-menu-item]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkMenuItem],
})
export class ScMenuItem {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'w-full flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_.svg]:pointer-events-none [&_.svg]:size-4 [&_.svg]:shrink-0',
      this._inset() && 'pl-8',
      this.class(),
    ),
  );

  readonly _inset = input<boolean, unknown>(false, {
    alias: 'inset',
    transform: booleanAttribute,
  });
}
