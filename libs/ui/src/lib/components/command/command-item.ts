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
  selector: 'sc-command-item',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '[attr.data-disabled]': 'disabled()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCommandItem {
  class = input<string>('');

  classes = computed(() =>
    cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      this.class(),
    ),
  );

  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });
}
